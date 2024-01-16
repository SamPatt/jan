/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState } from 'react'

import React from 'react'

import { useServerLog } from '@/hooks/useServerLog'

const Logs = () => {
  const { getServerLog } = useServerLog()
  const [logs, setLogs] = useState([])

  useEffect(() => {
    getServerLog().then((log) => {
      setLogs(log.split(/\r?\n|\r|\n/g))
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logs])

  return (
    <div className="p-4">
      {logs.length > 1 ? (
        <code className="text-xs">
          {logs.map((log, i) => {
            return (
              <p key={i} className="my-2 leading-relaxed">
                {log}
              </p>
            )
          })}
        </code>
      ) : (
        <div className="mt-24 flex flex-col items-center justify-center">
          <svg
            width="115"
            height="115"
            viewBox="0 0 115 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="57.4999" cy="57.5009" r="50.2314" fill="#DADADA" />
            <circle
              cx="57.5"
              cy="57.5"
              r="55.9425"
              fill="#E7E7E7"
              stroke="white"
              stroke-width="3.1151"
            />
            <mask
              id="mask0_1206_120508"
              maskUnits="userSpaceOnUse"
              x="3"
              y="3"
              width="109"
              height="109"
            >
              <circle cx="57.4993" cy="57.5003" r="54.1253" fill="white" />
            </mask>
            <g mask="url(#mask0_1206_120508)">
              <path
                d="M47.5039 116.445H58.5351L74.3593 39.8282L63.7828 37.6406L47.5039 116.445Z"
                fill="#8D8D8D"
              />
              <path
                d="M72.165 39.4563L74.3716 39.8457L72.4246 38.418L72.165 39.4563Z"
                fill="#8D8D8D"
              />
              <path
                d="M45.6797 114.947H56.7108L72.4257 38.4193L61.9585 36.1426L45.6797 114.947Z"
                fill="url(#paint0_linear_1206_120508)"
              />
              <path
                d="M93.1887 90.6726L26.5474 76.906L24.6602 75.2136L31.7058 51.9418L34.7984 52.1448L30.0296 49.6041L32.757 36.0039L99.3983 49.7705L101.29 51.467L98.5257 64.844L93.2456 64.9414L96.1515 65.4974L98.0387 67.1898L93.1887 90.6726Z"
                fill="#8D8D8D"
              />
              <path
                d="M91.3015 88.9801L24.6602 75.2136L29.8186 50.2454L32.9112 50.4483L30.3299 47.7656L32.757 36.0039L99.3983 49.7705L96.6345 63.1475L91.3583 63.2449L96.1515 65.4974L91.3015 88.9801Z"
                fill="url(#paint1_linear_1206_120508)"
              />
              <path
                d="M92.7826 63.1065C92.7826 63.1065 92.7298 63.1065 92.6243 63.1065L92.1576 63.0741L90.3637 62.9279L89.069 62.8143L87.5308 62.6317C86.431 62.4937 85.1688 62.3638 83.7929 62.1365L81.6216 61.8078C80.8667 61.6901 80.0875 61.5359 79.2798 61.4019C77.6564 61.126 75.9396 60.7647 74.1295 60.3995C70.5133 59.6324 66.5563 58.703 62.4247 57.6518C54.1655 55.5252 46.7221 53.4797 41.2918 52.1525C39.9403 51.8075 38.7065 51.5275 37.6391 51.2677C36.5717 51.008 35.6098 50.797 34.8631 50.6306L33.1098 50.2247L32.6552 50.1151C32.6025 50.1035 32.5508 50.0872 32.501 50.0664C32.5545 50.0686 32.6076 50.0768 32.6593 50.0908L33.1219 50.176L34.8834 50.5291C35.6504 50.6833 36.5879 50.8822 37.6675 51.1297C38.7471 51.3773 39.9849 51.6452 41.3446 51.978C46.783 53.2605 54.2386 55.2816 62.4937 57.4043C66.6253 58.4554 70.5742 59.3929 74.1823 60.1722C75.9924 60.5415 77.7051 60.9109 79.3245 61.195C80.1362 61.3411 80.9114 61.4953 81.6622 61.6008L83.8254 61.9458C85.2012 62.1852 86.4553 62.3273 87.5552 62.4775L89.0893 62.6804L90.3799 62.8143L92.1698 63.0091L92.6324 63.0659L92.7826 63.1065Z"
                fill="#A9A9A9"
              />
              <path
                d="M96.131 60.9773C96.0789 60.948 96.0288 60.9155 95.9808 60.8799L95.5749 60.5755C95.2056 60.3117 94.678 59.8937 93.9515 59.3985C91.9511 57.9951 89.8665 56.7156 87.7095 55.5673C84.5067 53.8752 81.1551 52.4813 77.697 51.4032C73.4578 50.101 69.0819 49.2947 64.6569 49.0005C59.9449 48.6555 55.4481 49.1142 51.353 49.2075C49.411 49.2762 47.4666 49.2369 45.529 49.0898C41.3921 48.7494 37.3342 47.762 33.5035 46.1636C32.6918 45.8267 32.0952 45.5426 31.6853 45.3519L31.2226 45.1165L31.0684 45.0312C31.1262 45.0462 31.1821 45.068 31.2348 45.0962L31.7096 45.3072C32.1155 45.4939 32.7364 45.7658 33.54 46.0865C35.8079 46.9951 38.1522 47.7 40.5451 48.1929C42.1954 48.5323 43.8654 48.7681 45.5452 48.899C47.4754 49.0336 49.4114 49.0647 51.3449 48.9924C55.4278 48.8869 59.9368 48.4201 64.6731 48.7651C69.1177 49.0615 73.5121 49.8788 77.766 51.2002C81.2331 52.295 84.5906 53.7108 87.7947 55.4293C89.949 56.5876 92.0247 57.8864 94.0083 59.3173C94.7105 59.8206 95.2259 60.2549 95.5912 60.5349L95.997 60.8596C96.0446 60.8953 96.0894 60.9347 96.131 60.9773Z"
                fill="#A9A9A9"
              />
              <path
                d="M63.9192 43.0816C63.8188 43.1282 63.7141 43.1649 63.6067 43.1912L62.6935 43.4631C62.2876 43.5849 61.8128 43.7188 61.2405 43.8487C60.6683 43.9786 60.023 44.1572 59.2924 44.287C58.5619 44.4169 57.7745 44.5914 56.91 44.6929C56.0456 44.7943 55.1283 44.9364 54.1583 45.046C52.0463 45.2502 49.9242 45.3328 47.8027 45.2936C45.6814 45.2371 43.565 45.0623 41.4632 44.77C40.4973 44.6158 39.58 44.4818 38.7278 44.2951C37.8755 44.1084 37.1043 43.9461 36.3697 43.7675C35.6351 43.589 35.0101 43.4063 34.446 43.244C33.8818 43.0816 33.3989 42.9315 33.0092 42.7975L32.1082 42.485C32.0022 42.4531 31.8991 42.4123 31.7998 42.3633C31.9103 42.3761 32.0191 42.4006 32.1245 42.4363L33.0377 42.7042C33.4435 42.826 33.9143 42.968 34.4825 43.1101C35.0507 43.2521 35.7001 43.4469 36.4103 43.5971C37.1206 43.7472 37.916 43.942 38.7683 44.0922C39.6206 44.2424 40.5338 44.3966 41.4957 44.5427C43.5877 44.8202 45.693 44.9868 47.8027 45.0419C49.9143 45.0792 52.0264 45.0034 54.1299 44.8146C55.0959 44.7091 56.0172 44.6239 56.8735 44.4859C57.7299 44.3479 58.5253 44.2302 59.2518 44.08C59.9783 43.9299 60.6277 43.8 61.1999 43.6742C61.7722 43.5484 62.2633 43.4347 62.661 43.3292L63.5823 43.106C63.6933 43.0854 63.8063 43.0772 63.9192 43.0816Z"
                fill="#A9A9A9"
              />
              <path
                d="M46.1782 66.8891C46.1782 66.8891 46.2837 66.9459 46.4786 67.0677L47.3552 67.6075C48.1263 68.0742 49.2546 68.7885 50.7644 69.5962C52.5839 70.6072 54.5341 71.3624 56.56 71.8405C57.1712 71.9765 57.7909 72.0714 58.4148 72.1246C59.0677 72.2062 59.729 72.063 60.2898 71.7188C60.5621 71.5185 60.7593 71.2327 60.8499 70.9071C60.9379 70.5705 60.9379 70.2169 60.8499 69.8803C60.6372 69.1763 60.1849 68.5689 59.5714 68.1635C54.4901 64.7949 47.3349 62.3395 39.2381 62.1122C38.2275 62.0797 37.2088 62.0797 36.1698 62.1122C35.1309 62.1447 34.0756 62.3882 33.3816 63.1593C33.2064 63.3413 33.0692 63.5562 32.9779 63.7918C32.8866 64.0273 32.8431 64.2786 32.85 64.5311C32.8877 65.0471 33.0864 65.5383 33.4181 65.9354C34.0716 66.7714 35.0132 67.3518 35.9182 67.9646C39.5709 70.4403 43.4387 72.8998 47.7895 74.6044C52.1402 76.309 56.7629 77.0761 61.1177 76.4308C62.1922 76.2718 63.2512 76.0219 64.2834 75.684C65.3 75.3967 66.2119 74.8217 66.9093 74.0281C67.5327 73.2028 67.8626 72.1929 67.8468 71.1587C67.8497 70.1451 67.625 69.1437 67.1893 68.2284C66.3039 66.4723 64.9462 64.9979 63.2688 63.971C61.6898 62.9951 59.9765 62.2554 58.1834 61.7753C56.4585 61.2761 54.7499 60.919 53.1183 60.5578L48.4226 59.4944L34.2542 56.276L30.4067 55.3872L29.4083 55.1518C29.181 55.099 29.0674 55.0625 29.0674 55.0625L29.4124 55.1274L30.4189 55.3385L34.2786 56.1827L48.4632 59.324L53.1589 60.3711C54.7824 60.7404 56.5032 61.0895 58.2402 61.5887C60.0548 62.0698 61.7887 62.8151 63.3865 63.8006C65.1016 64.8462 66.4904 66.3503 67.3963 68.1432C67.8467 69.0889 68.0797 70.1234 68.0782 71.1709C68.0964 72.2575 67.7507 73.319 67.096 74.1864C66.3707 75.017 65.4208 75.6203 64.3605 75.9235C63.3146 76.2697 62.2404 76.5237 61.1502 76.6824C56.7426 77.3399 52.0631 76.5566 47.7002 74.8479C43.3372 73.1393 39.441 70.6798 35.7965 68.1919C34.8955 67.5669 33.9376 66.9743 33.2477 66.0936C32.8831 65.658 32.6657 65.1181 32.6267 64.5514C32.6196 64.2683 32.6687 63.9866 32.7711 63.7226C32.8735 63.4586 33.0272 63.2174 33.2233 63.0132C33.599 62.6113 34.0734 62.3147 34.5992 62.1528C35.1094 61.9991 35.6373 61.9118 36.1698 61.893C37.2169 61.8525 38.2438 61.8565 39.2584 61.893C47.4039 62.1406 54.5794 64.6163 59.6932 68.0336C60.3373 68.4648 60.8099 69.1082 61.0285 69.8519C61.1239 70.2164 61.1239 70.5994 61.0285 70.9639C60.9286 71.3211 60.7095 71.6333 60.4075 71.8487C59.8169 72.2131 59.12 72.3662 58.431 72.2829C57.7989 72.2243 57.1713 72.1253 56.5519 71.9867C54.5186 71.4945 52.5639 70.7213 50.7441 69.6895C49.2343 68.8778 48.1142 68.1391 47.3512 67.6602C46.9778 67.4208 46.6896 67.2544 46.4907 67.1002C46.2919 66.9459 46.1782 66.8891 46.1782 66.8891Z"
                fill="#A9A9A9"
              />
              <path
                d="M94.8364 71.2204C94.6993 71.2055 94.5635 71.1797 94.4305 71.1433C94.1789 71.0743 93.8014 71.0012 93.3185 70.916C91.9393 70.7187 90.5384 70.7297 89.1625 70.9484C87.1263 71.2911 85.1507 71.9282 83.2979 72.8397C81.0433 73.9901 78.866 75.2861 76.7799 76.7197C74.6823 78.1612 72.4837 79.4497 70.201 80.5753C68.3181 81.4721 66.3087 82.0743 64.243 82.3611C62.8484 82.5487 61.4325 82.5089 60.0505 82.2434C59.6768 82.1692 59.3081 82.0716 58.9466 81.9512C58.8182 81.9168 58.6932 81.8706 58.5732 81.8132C58.7037 81.8336 58.8326 81.8634 58.9588 81.9025C59.2104 81.9755 59.5838 82.0567 60.0668 82.15C61.4407 82.3746 62.841 82.3869 64.2187 82.1866C66.2604 81.8789 68.2442 81.266 70.1036 80.3683C72.3696 79.236 74.5543 77.9477 76.6419 76.5127C78.7383 75.0733 80.9295 73.777 83.2005 72.6327C85.0755 71.7192 87.077 71.0926 89.1382 70.7739C90.5308 70.568 91.9473 70.5845 93.3347 70.8226C93.72 70.8867 94.1009 70.9748 94.4752 71.0864C94.5995 71.1198 94.7204 71.1646 94.8364 71.2204Z"
                fill="#A9A9A9"
              />
              <path
                d="M93.6026 77.826C93.6026 77.8504 93.286 77.7205 92.7016 77.5906C91.8761 77.4114 91.0248 77.3839 90.1894 77.5095C88.9516 77.719 87.7468 78.0901 86.6057 78.6134C85.195 79.2299 83.8293 79.9446 82.5187 80.7523C81.1063 81.5883 79.7589 82.4041 78.4602 83.025C77.321 83.5882 76.1214 84.0199 74.8846 84.3116C74.0488 84.5016 73.1926 84.5861 72.3358 84.5632C72.1034 84.5575 71.8716 84.5372 71.6418 84.5024C71.5603 84.4985 71.4797 84.4835 71.4023 84.4577C71.4023 84.4293 71.7392 84.4577 72.3358 84.4577C73.1828 84.4453 74.0257 84.3364 74.8481 84.133C76.0637 83.8193 77.242 83.3757 78.3628 82.8099C79.6371 82.1849 80.9724 81.3692 82.3888 80.529C83.7103 79.7132 85.0914 78.9983 86.5204 78.3902C87.683 77.8677 88.9122 77.5085 90.1731 77.3228C91.0279 77.2097 91.8965 77.2648 92.73 77.4851C92.9548 77.5461 93.1757 77.6207 93.3916 77.7083C93.4671 77.7375 93.5381 77.7771 93.6026 77.826Z"
                fill="#A9A9A9"
              />
              <path
                d="M72.1531 44.1988C72.1531 44.2678 69.584 43.7645 66.4468 43.0746C63.3095 42.3846 60.7648 41.7718 60.7932 41.7069C60.8216 41.6419 63.3623 42.1411 66.4995 42.8311C69.6368 43.521 72.1531 44.1339 72.1531 44.1988Z"
                fill="#A9A9A9"
              />
              <path
                d="M87.7278 22.8493C87.9286 21.4011 85.8726 20.21 84.3238 20.0848C83.5886 20.0273 82.8227 20.139 82.1249 19.8987C80.6135 19.3743 80.011 17.432 78.5371 16.8128C77.4342 16.3526 76.1544 16.762 75.0957 17.2967C74.0371 17.8313 72.9717 18.5046 71.7769 18.5825C70.7557 18.6468 69.6086 18.2644 68.7133 18.7686C68.0326 19.1442 67.6922 19.9224 67.059 20.3792C66.4259 20.836 65.6498 20.9206 64.8941 20.9612C64.1384 21.0018 63.3521 21.012 62.6611 21.3233C61.9701 21.6346 61.4017 22.3655 61.5446 23.1031L87.7278 22.8493Z"
                fill="#ABABAB"
              />
              <path
                d="M39.1881 32.5312C39.3293 31.4869 37.8655 30.6287 36.7662 30.5385C36.2413 30.4963 35.6955 30.5769 35.1993 30.4022C34.121 30.0182 33.6916 28.6264 32.64 28.1791C31.8556 27.847 30.951 28.1426 30.1895 28.5285C29.428 28.9144 28.6741 29.4001 27.8229 29.4538C27.0824 29.5018 26.2789 29.2254 25.632 29.5901C25.1491 29.8608 24.8972 30.4195 24.4525 30.742C24.0078 31.0645 23.4486 31.126 22.9085 31.1624C22.3684 31.1989 21.8092 31.1989 21.3187 31.4254C20.8282 31.652 20.4198 32.1741 20.5229 32.7078L39.1881 32.5312Z"
                fill="#ABABAB"
              />
              <path
                d="M76.46 61.6777L78.8178 62.1824L80.1702 66.9562L80.2674 66.977L83.4556 63.1752L85.8134 63.6799L80.8041 69.3391L80.0506 72.8588L77.9602 72.4114L78.7137 68.8917L76.46 61.6777Z"
                fill="white"
              />
              <path
                d="M67.148 61.4992L67.5195 59.7637L75.6965 61.514L75.325 63.2496L72.2769 62.5971L70.5171 70.8178L68.4364 70.3724L70.1962 62.1517L67.148 61.4992Z"
                fill="white"
              />
              <path
                d="M56.9049 67.9016L59.0361 57.9453L62.9642 58.7862C63.7193 58.9478 64.3318 59.2297 64.8016 59.632C65.272 60.0309 65.5922 60.5147 65.762 61.0832C65.9357 61.6491 65.9518 62.2627 65.8103 62.9238C65.6688 63.585 65.4013 64.1379 65.0078 64.5824C64.6144 65.0269 64.1169 65.3323 63.5153 65.4984C62.9169 65.6652 62.2353 65.6667 61.4705 65.503L58.9668 64.967L59.3279 63.2801L61.4913 63.7432C61.8964 63.8299 62.2451 63.8317 62.5375 63.7485C62.8338 63.6628 63.0734 63.5091 63.2565 63.2872C63.4435 63.0629 63.572 62.7871 63.6421 62.4597C63.7128 62.1291 63.7082 61.8265 63.628 61.5517C63.5518 61.2744 63.3954 61.0392 63.1587 60.8462C62.9228 60.65 62.6007 60.5082 62.1923 60.4207L60.7728 60.1169L59.0099 68.3522L56.9049 67.9016Z"
                fill="white"
              />
              <path
                d="M46.5049 55.2637L49.1009 55.8194L50.4108 63.0957L50.5275 63.1206L54.7013 57.0182L57.2973 57.5739L55.1661 67.5302L53.1243 67.0931L54.5114 60.6128L54.4288 60.5951L50.4754 66.4753L49.0851 66.1776L47.8905 59.1701L47.8078 59.1524L46.4154 65.657L44.3736 65.2199L46.5049 55.2637Z"
                fill="white"
              />
              <path
                d="M35.9977 63.425L38.1289 53.4688L44.8377 54.9048L44.4662 56.6404L39.8624 55.6549L39.3546 58.0273L43.6132 58.9389L43.2417 60.6744L38.9831 59.7628L38.4742 62.1401L43.0974 63.1297L42.7259 64.8653L35.9977 63.425Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1206_120508"
                x1="59.1074"
                y1="36.1426"
                x2="59.1074"
                y2="114.947"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CFCFCF" />
                <stop offset="1" stop-color="#C6C6C6" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1206_120508"
                x1="62.0292"
                y1="36.0039"
                x2="62.0292"
                y2="88.9801"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DDDDDD" />
                <stop offset="1" stop-color="#B6B6B6" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-4 text-muted-foreground">Empty logs</p>
        </div>
      )}
    </div>
  )
}

export default Logs
