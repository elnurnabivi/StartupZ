import React from 'react';
import './style.css';

const Logo = ({height, width}) => (
    <svg
      width={width}
      height={height}
      className='logo__icon'
      viewBox="0 0 200 49"
      fill="#141416"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentcolor"
      alt="startupz logo"
    >
      <path
        d="M46.4724 20.3609H42.0343C42.0768 20.0138 42.0374 19.6617 41.9194 19.3322C41.8014 19.0026 41.6078 18.7045 41.3539 18.4611C41.1 18.2178 40.7926 18.0358 40.4557 17.9293C40.1189 17.8229 39.7616 17.7949 39.412 17.8476C38.0003 17.8476 37.1938 18.637 37.1938 19.7326C37.1938 23.5436 46.6337 24.565 46.6337 30.5751C46.6337 34.0719 44.2541 36.5063 39.5334 36.5063C34.974 36.5063 32.1505 34.1098 32.1505 30.0999H36.6684C36.6358 30.4763 36.6883 30.8552 36.822 31.2091C36.9557 31.563 37.1672 31.8832 37.4414 32.1463C37.7156 32.4095 38.0455 32.6092 38.4073 32.7309C38.7691 32.8526 39.1537 32.8933 39.5334 32.85C41.1464 32.85 42.1557 32.0244 42.1557 30.6509C42.1557 27.5503 32.5944 25.7822 32.5944 19.9299C32.5944 16.5515 34.934 14.155 39.2906 14.155C43.89 14.155 46.4724 16.1979 46.4724 20.3609Z"
        fill="#141416"
      />
      <path
        d="M48.8116 18.2802V14.706C51.3525 14.706 52.119 13.7588 52.119 10.6204H55.2268V14.4313H58.7753V18.2408H55.2268V29.3974C55.2268 31.4798 55.5462 32.4617 57.9289 32.4617C58.2269 32.4674 58.5247 32.441 58.8169 32.3828V36.2317C58.8169 36.2317 58.0503 36.3106 57.0011 36.3106C51.3125 36.3106 50.6674 33.09 50.6674 28.0619V18.1981H48.8116V18.2802Z"
        fill="#141416"
      />
      <path
        d="M67.3296 36.5063C63.6341 36.4653 61.681 34.1557 61.681 29.8284V20.8298C61.5459 19.0229 62.106 17.2321 63.2492 15.8159C63.7797 15.2873 64.418 14.8765 65.1215 14.6105C65.825 14.3446 66.5777 14.2297 67.3296 14.2735C68.19 14.2287 69.048 14.3998 69.8236 14.7708C70.5993 15.1417 71.2675 15.7005 71.766 16.3953V14.5103H76.0029V36.1938H71.766V34.3072C71.2776 35.0173 70.6135 35.592 69.837 35.9769C69.0605 36.3618 68.1974 36.5441 67.3296 36.5063ZM68.8675 18.0845C67.1284 18.0845 66.2452 19.1896 66.2452 21.384V29.2775C66.2452 31.4971 67.1028 32.577 68.8675 32.577C70.6242 32.5359 71.4898 31.4577 71.4898 29.2775V20.9514C71.542 20.5863 71.5125 20.2143 71.4032 19.8618C71.2939 19.5092 71.1076 19.1847 70.8575 18.9112C70.6073 18.6377 70.2994 18.4219 69.9555 18.279C69.6116 18.1361 69.2402 18.0697 68.8675 18.0845Z"
        fill="#141416"
      />
      <path
        d="M88.8715 18.5153H88.2663C84.9988 18.5153 84.1508 20.1256 84.1508 23.7061V36.1589H79.6329V14.4691H83.9096V16.6304C84.2722 15.4511 85.8053 14.2339 88.5074 14.2339H88.8699L88.8715 18.5153Z"
        fill="#141416"
      />
      <path
        d="M91.5335 18.2802V14.706C94.0743 14.706 94.8409 13.7588 94.8409 10.6204H97.9487V14.4313H101.497V18.2408H97.9487V29.3974C97.9487 31.4798 98.2681 32.4617 100.651 32.4617C100.949 32.4674 101.247 32.441 101.539 32.3828V36.2317C101.539 36.2317 100.772 36.3106 99.7229 36.3106C94.0344 36.3106 93.3892 33.09 93.3892 28.0619V18.1981H91.5335V18.2802Z"
        fill="#141416"
      />
      <path
        d="M114.286 14.4695H118.805V29.5145C118.87 30.4529 118.728 31.3939 118.391 32.2732C118.053 33.1525 117.527 33.9493 116.849 34.609C116.171 35.2687 115.357 35.7758 114.462 36.0954C113.567 36.415 112.613 36.5396 111.665 36.4608C107.147 36.4608 104.478 33.7896 104.478 29.5145V14.4695H109.001V30.1428C108.987 30.4861 109.047 30.8284 109.178 31.1465C109.31 31.4647 109.509 31.7512 109.762 31.9866C110.015 32.222 110.316 32.4008 110.645 32.5109C110.975 32.621 111.324 32.6597 111.67 32.6246C112.009 32.6414 112.348 32.5895 112.666 32.472C112.984 32.3546 113.274 32.1742 113.519 31.9417C113.764 31.7093 113.959 31.4299 114.09 31.1205C114.222 30.8112 114.289 30.4785 114.286 30.1428V14.4695Z"
        fill="#141416"
      />
      <path
        d="M126.671 43.5773H122.113V14.4297H126.389V16.3147C126.874 15.613 127.533 15.046 128.303 14.6679C129.073 14.2898 129.928 14.1132 130.786 14.1551C131.548 14.1177 132.31 14.2389 133.021 14.5108C133.733 14.7828 134.379 15.1994 134.917 15.7338C136.055 17.1547 136.611 18.9467 136.475 20.754V29.7842C136.475 34.0751 134.507 36.3437 130.786 36.3437C130.002 36.3811 129.22 36.2313 128.507 35.9071C127.794 35.5828 127.17 35.0936 126.688 34.4809L126.671 34.4572V43.5694V43.5773ZM129.253 18.045C127.538 18.045 126.631 19.1864 126.631 21.3445V29.279C126.631 31.3866 127.538 32.4996 129.253 32.4996C131.021 32.4996 131.917 31.4024 131.917 29.2396V21.346C131.917 19.1548 131.019 18.045 129.253 18.045Z"
        fill="#141416"
      />
      <path
        d="M151.563 36.1529H138.452L145.639 18.3136H139.179V14.4695H151.805L144.664 32.3088H151.563V36.1577V36.1529Z"
        fill="#141416"
      />
      <path
        d="M155.88 36.4288C155.624 36.4347 155.37 36.3904 155.132 36.2985C154.894 36.2066 154.677 36.069 154.493 35.8935C154.309 35.718 154.162 35.5083 154.061 35.2763C153.959 35.0444 153.906 34.7949 153.903 34.5423C153.908 34.0282 154.119 33.5371 154.489 33.1764C154.86 32.8157 155.36 32.6149 155.88 32.6178C156.14 32.6126 156.399 32.6583 156.641 32.7523C156.884 32.8464 157.105 32.9868 157.292 33.1657C157.48 33.3445 157.629 33.5582 157.733 33.7945C157.836 34.0307 157.891 34.2849 157.895 34.5423C157.891 34.7978 157.835 35.0499 157.731 35.2838C157.627 35.5177 157.476 35.7287 157.289 35.9044C157.101 36.0802 156.88 36.2171 156.638 36.3071C156.396 36.3971 156.138 36.4385 155.88 36.4288Z"
        fill="#141416"
      />
      <path
        d="M169.838 31.3219C169.907 32.0128 169.821 32.7102 169.588 33.3648C169.354 34.0195 168.977 34.6153 168.485 35.1101C167.992 35.6049 167.395 35.9866 166.737 36.2281C166.078 36.4697 165.374 36.5652 164.675 36.5079C163.971 36.5716 163.263 36.4809 162.599 36.2422C161.935 36.0035 161.333 35.6227 160.836 35.1272C160.339 34.6316 159.958 34.0335 159.722 33.3757C159.486 32.7178 159.4 32.0165 159.47 31.3219V25.5486C159.412 24.8602 159.508 24.1678 159.75 23.5197C159.991 22.8717 160.374 22.2838 160.869 21.7972C161.365 21.3106 161.963 20.9371 162.62 20.7029C163.277 20.4687 163.979 20.3795 164.675 20.4415C165.367 20.3858 166.064 20.4798 166.716 20.7168C167.368 20.9538 167.96 21.3283 168.451 21.8141C168.943 22.3 169.321 22.8856 169.56 23.5305C169.8 24.1754 169.894 24.864 169.838 25.5486V25.7838H166.57V25.1523C166.597 24.8976 166.566 24.6403 166.481 24.3985C166.396 24.1568 166.258 23.9364 166.077 23.7532C165.896 23.5699 165.677 23.4281 165.435 23.3379C165.192 23.2477 164.933 23.2112 164.675 23.231C164.414 23.2098 164.152 23.2451 163.906 23.3345C163.661 23.4238 163.438 23.5651 163.254 23.7483C163.069 23.9316 162.927 24.1525 162.838 24.3955C162.749 24.6386 162.715 24.8979 162.737 25.1555V31.7544C162.707 32.0136 162.737 32.276 162.823 32.5224C162.91 32.7688 163.051 32.9927 163.237 33.1776C163.423 33.3625 163.649 33.5036 163.898 33.5903C164.147 33.6771 164.412 33.7074 164.675 33.6789C164.933 33.6991 165.193 33.6627 165.436 33.5724C165.679 33.4821 165.898 33.3401 166.079 33.1564C166.26 32.9727 166.398 32.7518 166.483 32.5095C166.568 32.2672 166.597 32.0094 166.57 31.7544V31.1656H169.838V31.3219Z"
        fill="#141416"
      />
      <path
        d="M176.816 36.5081C176.113 36.5697 175.405 36.4776 174.743 36.2382C174.08 35.9988 173.479 35.618 172.982 35.1229C172.485 34.6278 172.105 34.0305 171.868 33.3736C171.631 32.7167 171.543 32.0162 171.611 31.322V25.5487C171.579 24.8709 171.683 24.1936 171.916 23.5555C172.15 22.9175 172.509 22.3314 172.972 21.8308C173.486 21.3565 174.091 20.9891 174.751 20.7505C175.412 20.5118 176.114 20.4068 176.816 20.4416C177.509 20.3859 178.205 20.4799 178.857 20.7169C179.509 20.9539 180.102 21.3284 180.593 21.8142C181.084 22.3001 181.462 22.8858 181.702 23.5306C181.941 24.1755 182.036 24.8641 181.979 25.5487V31.322C182.049 32.7187 181.555 34.0857 180.607 35.1235C180.102 35.5946 179.506 35.9601 178.854 36.198C178.203 36.4359 177.51 36.5414 176.816 36.5081ZM176.816 23.2312C176.554 23.2048 176.29 23.2365 176.042 23.324C175.794 23.4115 175.569 23.5527 175.383 23.7371C175.198 23.9215 175.056 24.1445 174.969 24.3899C174.882 24.6353 174.851 24.8969 174.879 25.1556V31.7546C174.849 32.0137 174.878 32.2762 174.964 32.5226C175.051 32.7689 175.193 32.9929 175.379 33.1777C175.565 33.3626 175.791 33.5037 176.039 33.5905C176.288 33.6772 176.554 33.7075 176.816 33.679C177.074 33.6992 177.334 33.6629 177.577 33.5727C177.819 33.4824 178.039 33.3405 178.22 33.157C178.401 32.9735 178.539 32.7528 178.624 32.5107C178.709 32.2686 178.739 32.011 178.712 31.7562V25.1556C178.739 24.9006 178.709 24.6428 178.624 24.4005C178.539 24.1582 178.402 23.9374 178.221 23.7537C178.04 23.57 177.82 23.4279 177.577 23.3376C177.334 23.2473 177.075 23.211 176.816 23.2312Z"
        fill="#141416"
      />
      <path
        d="M186.941 36.233H183.674V20.5597H186.78V21.8558C187.062 21.3827 187.472 20.9964 187.964 20.7397C188.455 20.483 189.009 20.3661 189.563 20.4018C190.216 20.3586 190.868 20.5023 191.441 20.8159C192.013 21.1295 192.482 21.5997 192.791 22.17C193.147 21.6139 193.642 21.1586 194.229 20.8487C194.816 20.5387 195.475 20.3848 196.14 20.4018C198.44 20.4018 199.851 21.7769 199.851 24.9974V36.2315H196.542V24.9201C196.542 23.624 195.816 23.1914 194.969 23.1914C194.749 23.1845 194.53 23.2246 194.327 23.309C194.123 23.3934 193.941 23.52 193.792 23.6802C193.643 23.8405 193.53 24.0307 193.462 24.2378C193.393 24.4449 193.371 24.6642 193.396 24.8806V36.233H190.089V24.9201C190.089 23.6571 189.362 23.1914 188.516 23.1914C188.295 23.181 188.074 23.2187 187.869 23.3019C187.664 23.385 187.48 23.5116 187.33 23.6727C187.18 23.8338 187.068 24.0254 187.001 24.2341C186.934 24.4428 186.914 24.6635 186.943 24.8806L186.941 36.233Z"
        fill="#141416"
      />
      <path
        d="M12.1637 35.0444C11.7468 34.9316 11.5466 34.5471 11.6497 34.0428L12.8916 29.0817L12.8444 29.0605C12.7539 29.0167 12.66 28.98 12.5639 28.9508C12.3371 28.8894 12.102 28.8258 11.891 28.7688L11.6809 28.7119L11.6384 28.7004C11.4216 28.6418 11.0941 28.549 10.7889 28.4664C10.4454 28.3735 10.1511 28.2939 9.88773 28.2328C9.70661 28.1989 9.5219 28.2317 9.37072 28.3244C8.59594 28.93 7.81858 29.546 7.07277 30.1426L7.06166 30.1514L6.98349 30.2147L6.9823 30.2195L6.9058 30.2833C6.15317 30.8823 5.37502 31.5014 4.60417 32.1055C4.57472 32.1272 4.54758 32.1502 4.52433 32.1684L4.51754 32.1742C4.47627 32.2121 4.43087 32.2457 4.38207 32.2744C4.29613 32.3323 4.19718 32.3708 4.09217 32.3872C3.98716 32.4036 3.87866 32.3975 3.7743 32.3694C3.63076 32.3307 3.50136 32.2505 3.40409 32.14C3.30683 32.0295 3.24653 31.8942 3.23159 31.7528C3.2217 31.6073 3.2352 31.4622 3.27161 31.3227C3.46434 30.5528 3.67608 29.7069 3.82641 29.0886L3.91276 28.7437C4.32772 27.0683 4.75531 25.3388 5.19949 23.6249C5.39256 22.7077 5.84234 21.8686 6.50143 21.196C7.16052 20.5234 8.00451 20.0421 8.94444 19.8031C9.41944 19.6781 9.9118 19.6126 10.4096 19.6081C10.5279 19.6208 10.6445 19.5881 10.7338 19.5173C10.8231 19.4464 10.8779 19.3431 10.8862 19.2301C11.0396 18.578 11.2049 17.9283 11.3647 17.3007L11.3675 17.2896C11.5788 16.4454 11.8048 15.5747 11.9987 14.697C12.6759 11.7654 14.0909 9.06675 16.1228 6.83214C16.9891 5.86092 17.8999 4.97863 19.0023 3.95303C19.3024 3.66839 19.5987 3.55509 19.8597 3.62569C20.0175 3.69152 20.158 3.79251 20.2691 3.91999C20.3802 4.04746 20.4585 4.19759 20.4973 4.35745C21.7594 7.533 22.3125 10.9007 22.1196 14.2355C22.0491 15.0514 21.9147 15.8582 21.7174 16.6494C21.3068 18.3749 20.8673 20.1307 20.4115 21.866C20.3913 21.9107 20.3808 21.9591 20.3806 22.0086C20.3804 22.058 20.3905 22.1074 20.4103 22.1539C20.43 22.2004 20.4591 22.2431 20.4958 22.2794C20.5325 22.3157 20.576 22.3449 20.6239 22.3653C21.6973 22.9976 22.5515 23.929 23.066 25.0282C23.5387 26.1299 23.6302 27.3338 23.3267 28.4569C22.9043 30.2012 22.4604 31.9567 22.0294 33.6573L22.0258 33.6715C21.8164 34.5079 21.5884 35.4008 21.37 36.2736C21.3558 36.4452 21.2774 36.6034 21.1492 36.7192C21.021 36.835 20.8514 36.9007 20.6717 36.9042C20.589 36.9069 20.5058 36.8977 20.4248 36.8771C20.2932 36.8322 20.174 36.7568 20.0781 36.6578C19.9822 36.5588 19.9126 36.4393 19.8758 36.3104C19.0516 34.3006 18.26 32.4095 17.4564 30.5269C17.3953 30.402 17.2982 30.2953 17.1772 30.2199C16.9051 30.1404 16.6174 30.0592 16.2722 29.9658C16.0021 29.8927 15.7344 29.8203 15.4126 29.7333L15.2775 29.6967C14.9657 29.6124 14.642 29.529 14.3127 29.4399L13.0648 34.4248C12.9368 34.9148 12.5848 35.1583 12.1637 35.0444ZM20.0551 23.6417C20.0497 23.6596 20.0426 23.6769 20.0341 23.6935L20.0304 23.7085C20.0189 23.7293 20.0096 23.7511 20.0025 23.7737L18.6421 29.2079C18.6204 29.3617 18.6422 29.5202 18.7053 29.6668C19.2328 30.945 19.7616 32.204 20.3515 33.5996C20.3941 33.6899 20.4436 33.7773 20.4997 33.861L20.5079 33.8742L22.0798 27.595C22.1009 27.5007 22.1131 27.4045 22.1162 27.3074L22.1198 27.2932L22.1233 27.2789C22.1261 27.2324 22.1286 27.1798 22.1356 27.1268C22.1404 26.4345 21.9502 25.7456 21.5852 25.1325C21.2202 24.5195 20.6939 24.0051 20.0618 23.6435L20.0551 23.6417ZM10.461 21.0032C10.2992 21.0051 10.1383 21.0181 9.97946 21.0419C9.17987 21.1195 8.43528 21.4322 7.84628 21.9376C7.25727 22.443 6.85222 23.1169 6.68583 23.8682C6.35791 25.1177 6.04675 26.3784 5.74692 27.5975L5.65541 27.9631C5.53102 28.46 5.40227 28.9743 5.2761 29.4783C5.26467 29.5385 5.25943 29.5999 5.26047 29.6616L5.2579 29.6719C5.25394 29.6877 5.25728 29.7064 5.25626 29.7247C5.2956 29.6961 5.33838 29.6719 5.38377 29.6527L5.38794 29.6539C5.40695 29.6455 5.42203 29.6386 5.43731 29.6309C5.97309 29.2047 6.51422 28.7749 7.05599 28.3462L7.12718 28.2894L7.26936 28.1766C7.7928 27.7618 8.31426 27.3478 8.83371 26.9347C8.96792 26.8145 9.05759 26.6553 9.09012 26.4794C9.3289 25.586 9.55287 24.6699 9.77015 23.7842L9.80184 23.6576C9.89949 23.2675 10.0169 22.7806 10.1308 22.3256L10.4618 21.0035L10.461 21.0032ZM15.7166 20.8266C15.8768 20.8793 16.0155 20.9827 16.1092 21.1194C16.203 21.2561 16.2461 21.4176 16.2313 21.5766C16.2144 21.7183 16.1868 21.8583 16.1487 21.9953L14.6208 28.0989L17.1905 28.7941L20.3349 16.2331C20.7677 14.4974 20.877 12.6888 20.6578 10.8891C20.4304 9.07807 20.0299 7.28364 19.4616 5.52869C19.3918 5.59428 19.3268 5.64766 19.2791 5.68883C19.1971 5.75304 19.1217 5.82455 19.0538 5.90245C18.8494 6.12849 18.6399 6.35736 18.4388 6.58091L18.428 6.59234C17.7032 7.38219 16.9578 8.1977 16.2909 9.04459C15 10.7014 14.0737 12.601 13.565 14.6349C12.932 17.2845 12.2487 19.9712 11.5887 22.5688C11.2599 23.8645 10.9192 25.2043 10.5882 26.5265L10.4749 26.9791L13.2122 27.7195L14.7553 21.555C14.7625 21.5265 14.77 21.4964 14.7777 21.4656C14.7913 21.3675 14.8233 21.2735 14.8722 21.1878C14.9362 21.0419 15.0528 20.9246 15.2016 20.8567C15.3503 20.7887 15.5217 20.7745 15.6854 20.8164L15.7166 20.8266Z"
        fill="#141416"
      />
      <path
        d="M6.85574 38.5964L8.17223 33.5078C8.20441 33.3681 8.24763 33.2311 8.30155 33.098C8.36934 32.9542 8.49172 32.8395 8.64668 32.7746C8.80164 32.7097 8.97904 32.6989 9.14698 32.744C9.31741 32.7823 9.4693 32.8763 9.57394 33.008C9.67857 33.1398 9.72871 33.3003 9.71486 33.4592C9.70432 33.5752 9.68249 33.6897 9.64963 33.8013L6.93985 44.2754C6.79449 44.7473 6.4357 44.9491 5.99946 44.8164C5.56322 44.6837 5.36508 44.3582 5.48798 43.8832C5.96097 42.1462 6.41689 40.384 6.85574 38.5964Z"
        fill="#141416"
      />
      <path
        d="M13.1123 40.9782L14.2779 36.4608C14.3056 36.3032 14.3682 36.1539 14.4617 36.022C14.5374 35.8942 14.6616 35.798 14.8116 35.7509C14.9616 35.7039 15.1272 35.7092 15.2781 35.7659C15.4352 35.8035 15.575 35.8911 15.6725 36.0128C15.77 36.1345 15.819 36.2824 15.8106 36.4302C15.8061 36.6024 15.7781 36.7725 15.7273 36.9365L13.3824 46.0245C13.2329 46.5137 12.8647 46.7568 12.4249 46.6439C11.9851 46.531 11.7852 46.1217 11.9079 45.6459L13.1123 40.9782Z"
        fill="#141416"
      />
      <path
        d="M9.30109 42.1363L9.94711 39.6048C10.0779 39.0921 10.4625 38.8536 10.8954 38.967C10.9993 39.0045 11.0951 39.0608 11.1769 39.1327C11.2588 39.2045 11.3251 39.2904 11.372 39.3853C11.4189 39.4802 11.4454 39.5822 11.45 39.6851C11.4545 39.7881 11.437 39.89 11.3984 39.9848L10.0912 45.1074C10.0781 45.2121 10.0422 45.3122 9.98552 45.4016C9.92885 45.4909 9.8527 45.5676 9.76177 45.6269C9.67085 45.6861 9.5671 45.7267 9.45694 45.7461C9.34679 45.7655 9.23259 45.7633 9.12142 45.7396C8.69272 45.6062 8.4872 45.2361 8.61843 44.7218C8.86196 43.8571 9.07899 43.0066 9.30109 42.1363Z"
        fill="#141416"
      />
      <path
        d="M16.7227 17.1242L16.6856 17.1141C16.041 16.9317 15.4844 16.5157 15.1343 15.9548C14.7842 15.3939 14.6684 14.7324 14.8115 14.1112C14.9765 13.4956 15.3864 12.9774 15.9539 12.6671C16.5213 12.3567 17.2015 12.2788 17.8494 12.4498L17.8857 12.4597C18.2151 12.5527 18.5252 12.707 18.7981 12.9139C19.071 13.1207 19.3014 13.376 19.4759 13.665C19.6466 13.9399 19.7609 14.2424 19.8124 14.5551C19.8638 14.8678 19.8514 15.1845 19.7757 15.487C19.6936 15.7906 19.5496 16.0729 19.3521 16.3176C19.1545 16.5623 18.9072 16.7647 18.6243 16.9131C18.0548 17.224 17.3717 17.2999 16.7227 17.1242ZM17.5436 13.7483C17.2563 13.6708 16.9541 13.7055 16.7031 13.8448C16.4522 13.9842 16.273 14.2167 16.205 14.4915C16.1493 14.7674 16.2063 15.0583 16.3641 15.3039C16.5219 15.5495 16.7686 15.7312 17.0531 15.8114C17.3445 15.8822 17.6478 15.8409 17.8982 15.6963C18.0211 15.6264 18.1269 15.5323 18.2092 15.4199C18.2915 15.3075 18.3486 15.179 18.3771 15.0423C18.4311 14.7715 18.3747 14.4864 18.2197 14.2457C18.0646 14.005 17.8226 13.8269 17.5436 13.7483Z"
        fill="#141416"
      />
    </svg>
);

export default Logo;