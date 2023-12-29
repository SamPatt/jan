import {
  Assistant,
  ConversationalExtension,
  ExtensionType,
  Thread,
  ThreadAssistantInfo,
  ThreadState,
  Model,
} from '@janhq/core'
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'

import { generateThreadId } from '@/utils/thread'

import useDeleteThread from './useDeleteThread'

import { extensionManager } from '@/extension'
import {
  threadsAtom,
  setActiveThreadIdAtom,
  threadStatesAtom,
  updateThreadAtom,
  setThreadModelRuntimeParamsAtom,
} from '@/helpers/atoms/Thread.atom'

import { fileUploadAtom } from '@/containers/Providers/Jotai'

const createNewThreadAtom = atom(null, (get, set, newThread: Thread) => {
  // create thread state for this new thread
  const currentState = { ...get(threadStatesAtom) }

  const threadState: ThreadState = {
    hasMore: false,
    waitingForResponse: false,
    lastMessage: undefined,
    isFinishInit: false,
  }
  currentState[newThread.id] = threadState
  set(threadStatesAtom, currentState)

  // add the new thread on top of the thread list to the state
  const threads = get(threadsAtom)
  set(threadsAtom, [newThread, ...threads])
})

export const useCreateNewThread = () => {
  const threadStates = useAtomValue(threadStatesAtom)
  const createNewThread = useSetAtom(createNewThreadAtom)
  const setActiveThreadId = useSetAtom(setActiveThreadIdAtom)
  const updateThread = useSetAtom(updateThreadAtom)
  const [fileUpload, setFileUpload] = useAtom(fileUploadAtom)
  const setThreadModelRuntimeParams = useSetAtom(
    setThreadModelRuntimeParamsAtom
  )

  const { deleteThread } = useDeleteThread()

  const requestCreateNewThread = async (
    assistant: Assistant,
    model?: Model | undefined
  ) => {
    // loop through threads state and filter if there's any thread that is not finish init
    let unfinishedInitThreadId: string | undefined = undefined
    for (const key in threadStates) {
      const isFinishInit = threadStates[key].isFinishInit ?? true
      if (!isFinishInit) {
        unfinishedInitThreadId = key
        break
      }
    }

    if (unfinishedInitThreadId) {
      await deleteThread(unfinishedInitThreadId)
    }

    const modelId = model ? model.id : '*'
    const createdAt = Date.now()
    const assistantInfo: ThreadAssistantInfo = {
      assistant_id: assistant.id,
      assistant_name: assistant.name,
      model: {
        id: modelId,
        settings: {},
        parameters: {
          stream: true,
          max_tokens: 4096,
        },
        engine: undefined,
      },
      instructions: assistant.instructions,
    }
    const threadId = generateThreadId(assistant.id)
    const thread: Thread = {
      id: threadId,
      object: 'thread',
      title: 'New Thread',
      assistants: [assistantInfo],
      created: createdAt,
      updated: createdAt,
    }
    setThreadModelRuntimeParams(thread.id, assistantInfo.model.parameters)

    // add the new thread on top of the thread list to the state
    createNewThread(thread)
    setActiveThreadId(thread.id)

    // Delete the file upload state
    setFileUpload([])
  }

  function updateThreadMetadata(thread: Thread) {
    updateThread(thread)
    extensionManager
      .get<ConversationalExtension>(ExtensionType.Conversational)
      ?.saveThread(thread)
  }

  return {
    requestCreateNewThread,
    updateThreadMetadata,
  }
}
