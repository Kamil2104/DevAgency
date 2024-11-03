import React from 'react'

import { useFormContext } from '../../../../../../hooks/useFormContext'

import './styles/Header.css'

const Header: React.FC = () => {
  const { setIsFormDisplayed } = useFormContext();

  return (
    <section className='formHeader'>
        <svg viewBox="0 0 129 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='formHeaderLogo'>
          <path d="M7.00595 0C8.58285 0 9.90445 0.195236 10.9707 0.585706C12.037 0.976176 12.8855 1.50932 13.5163 2.18513C14.1471 2.84593 14.5976 3.61184 14.8679 4.4829C15.1533 5.35397 15.2959 6.27005 15.2959 7.23122C15.2959 8.20738 15.1457 9.13853 14.8454 10.0246C14.545 10.9106 14.0644 11.6991 13.4037 12.3899C12.7579 13.0658 11.9094 13.6064 10.8581 14.0119C9.80681 14.4024 8.52276 14.5976 7.00595 14.5976H0V0H7.00595ZM2.5681 12.3449H6.98342C8.09475 12.3449 9.01836 12.2022 9.75426 11.9169C10.4902 11.6315 11.0759 11.2485 11.5114 10.768C11.9469 10.2724 12.2548 9.72423 12.435 9.1235C12.6152 8.50777 12.7053 7.87701 12.7053 7.23122C12.7053 6.58543 12.6152 5.9697 12.435 5.38399C12.2548 4.78325 11.9469 4.25014 11.5114 3.78456C11.0759 3.30398 10.4902 2.92853 9.75426 2.6582C9.01836 2.37286 8.09475 2.23019 6.98342 2.23019H2.5681V12.3449ZM27.2042 10.9031H29.6146C29.4945 11.6691 29.1941 12.3524 28.7135 12.9531C28.2479 13.5388 27.6097 14.0044 26.7987 14.3498C25.9877 14.6802 25.019 14.8454 23.8927 14.8454C22.6161 14.8454 21.4748 14.6126 20.4686 14.1471C19.4623 13.6665 18.6739 12.9907 18.1032 12.1196C17.5325 11.2485 17.2472 10.2123 17.2472 9.01086C17.2472 7.82442 17.525 6.78817 18.0807 5.90211C18.6364 5.01606 19.4023 4.33271 20.3785 3.85214C21.3696 3.37158 22.511 3.13127 23.8026 3.13127C25.1392 3.13127 26.2505 3.37158 27.1366 3.85214C28.0377 4.31772 28.706 5.02356 29.1415 5.9697C29.577 6.90081 29.7573 8.07975 29.6822 9.50646H19.7927C19.8678 10.1372 20.0706 10.7079 20.401 11.2185C20.7464 11.7141 21.212 12.1046 21.7977 12.3899C22.3834 12.6603 23.0667 12.7954 23.8476 12.7954C24.7187 12.7954 25.4471 12.6227 26.0328 12.2773C26.6335 11.9319 27.024 11.4738 27.2042 10.9031ZM23.735 5.15872C22.7138 5.15872 21.8727 5.41402 21.212 5.92464C20.5512 6.42024 20.1232 7.0585 19.9279 7.83945H27.1591C27.099 6.99845 26.7611 6.34516 26.1454 5.87959C25.5297 5.39902 24.7262 5.15872 23.735 5.15872ZM37.0132 12.818H36.1346L40.0093 3.37907H42.7351L37.7791 14.5976H35.3912L30.5027 3.37907H33.251L37.0132 12.818ZM46.9279 11.1735V8.98834H55.6234V11.1735H46.9279ZM43.5489 14.5976L49.924 0H52.6724L59.0926 14.5976H56.3218L50.735 1.41921H51.8614L46.2972 14.5976H43.5489ZM65.8205 12.863C64.7691 12.863 63.8156 12.6753 62.9595 12.2998C62.1183 11.9244 61.4502 11.3762 60.9546 10.6553C60.4738 9.93448 60.2337 9.07095 60.2337 8.06472C60.2337 7.0585 60.4664 6.18747 60.9321 5.45157C61.4125 4.71567 62.0732 4.145 62.9145 3.73951C63.7705 3.33402 64.7392 3.13127 65.8205 3.13127C66.1359 3.13127 66.4361 3.1538 66.7216 3.19886C67.0218 3.24391 67.3073 3.30398 67.5776 3.37907L72.8264 3.4016V5.49663C72.1056 5.51166 71.3769 5.41402 70.6413 5.20377C69.9204 4.9785 69.2819 4.74573 68.7265 4.50543L68.6589 4.37027C69.1693 4.62556 69.6276 4.94094 70.0331 5.31641C70.4533 5.67684 70.7838 6.08983 71.0243 6.5554C71.2643 7.02098 71.3847 7.5466 71.3847 8.1323C71.3847 9.1235 71.1443 9.97203 70.6638 10.6779C70.1981 11.3837 69.5449 11.9244 68.704 12.2998C67.8778 12.6753 66.9166 12.863 65.8205 12.863ZM69.4248 19.1706V18.6525C69.4248 17.9166 69.2069 17.3985 68.7715 17.0981C68.3358 16.7978 67.7275 16.6476 66.9468 16.6476H63.9057C63.3048 16.6476 62.7867 16.595 62.3513 16.4899C61.9307 16.3998 61.5928 16.2571 61.3376 16.0619C61.082 15.8816 60.8944 15.6639 60.7744 15.4086C60.654 15.1683 60.5942 14.8979 60.5942 14.5976C60.5942 13.9969 60.7744 13.5463 61.1348 13.246C61.51 12.9456 61.9983 12.7504 62.5991 12.6603C63.2147 12.5702 63.8606 12.5551 64.5364 12.6152L65.8205 12.863C64.9342 12.893 64.2584 12.9756 63.793 13.1108C63.3425 13.2309 63.1172 13.4787 63.1172 13.8542C63.1172 14.0795 63.2073 14.2597 63.3875 14.3949C63.5678 14.53 63.823 14.5976 64.1535 14.5976H67.3523C68.2682 14.5976 69.0718 14.7027 69.7627 14.913C70.4533 15.1382 70.9866 15.5062 71.3622 16.0168C71.7525 16.5424 71.9479 17.2558 71.9479 18.1569V19.1706H69.4248ZM65.8205 10.9031C66.421 10.9031 66.9542 10.7905 67.4199 10.5652C67.8852 10.34 68.2534 10.0171 68.5237 9.59657C68.7941 9.17605 68.9292 8.66546 68.9292 8.06472C68.9292 7.46399 68.7941 6.94586 68.5237 6.51035C68.2534 6.07484 67.8852 5.74443 67.4199 5.51915C66.9542 5.29388 66.421 5.18125 65.8205 5.18125C65.2348 5.18125 64.7015 5.29388 64.2211 5.51915C63.7554 5.74443 63.3875 6.07484 63.1172 6.51035C62.8469 6.93087 62.7117 7.44899 62.7117 8.06472C62.7117 8.66546 62.8469 9.17605 63.1172 9.59657C63.3875 10.0171 63.7554 10.34 64.2211 10.5652C64.6864 10.7905 65.2196 10.9031 65.8205 10.9031ZM84.0721 10.9031H86.4825C86.3624 11.6691 86.0618 12.3524 85.5814 12.9531C85.1157 13.5388 84.4775 14.0044 83.6666 14.3498C82.8556 14.6802 81.8869 14.8454 80.7606 14.8454C79.4839 14.8454 78.3428 14.6126 77.3364 14.1471C76.3301 13.6665 75.5416 12.9907 74.9711 12.1196C74.4005 11.2485 74.115 10.2123 74.115 9.01086C74.115 7.82442 74.3928 6.78817 74.9486 5.90211C75.5043 5.01606 76.2703 4.33271 77.2463 3.85214C78.2375 3.37158 79.379 3.13127 80.6704 3.13127C82.0069 3.13127 83.1185 3.37158 84.0045 3.85214C84.9056 4.31772 85.574 5.02356 86.0094 5.9697C86.4448 6.90081 86.625 8.07975 86.55 9.50646H76.6606C76.7356 10.1372 76.9383 10.7079 77.2689 11.2185C77.6142 11.7141 78.0798 12.1046 78.6655 12.3899C79.2512 12.6603 79.9344 12.7954 80.7155 12.7954C81.5867 12.7954 82.3149 12.6227 82.9006 12.2773C83.5015 11.9319 83.8918 11.4738 84.0721 10.9031ZM80.6029 5.15872C79.5818 5.15872 78.7405 5.41402 78.0798 5.92464C77.4191 6.42024 76.9911 7.0585 76.7958 7.83945H84.027C83.9668 6.99845 83.6289 6.34516 83.0133 5.87959C82.3977 5.39902 81.5941 5.15872 80.6029 5.15872ZM88.7802 3.37907H91.2807V14.5976H88.7802V3.37907ZM96.0114 3.13127C96.6573 3.13127 97.2504 3.22138 97.7911 3.4016C98.3469 3.58182 98.8199 3.85964 99.2103 4.23511C99.6158 4.59554 99.9238 5.04608 100.134 5.58673C100.359 6.12739 100.472 6.76564 100.472 7.50154V14.5976H97.9713V7.99714C97.9713 7.08102 97.746 6.40521 97.2955 5.9697C96.8601 5.51915 96.1691 5.29388 95.223 5.29388C94.5021 5.29388 93.8415 5.45157 93.2406 5.76695C92.6549 6.0673 92.1744 6.46529 91.7989 6.96089C91.4233 7.44146 91.2058 7.97461 91.1456 8.56032L91.123 7.34385C91.198 6.78817 91.3635 6.26255 91.6187 5.76695C91.8738 5.25633 92.2117 4.80578 92.6324 4.41532C93.053 4.00983 93.5486 3.69445 94.1192 3.46918C94.6897 3.24391 95.3205 3.13127 96.0114 3.13127ZM115.308 10.2499C115.218 11.211 114.91 12.037 114.385 12.7278C113.859 13.4187 113.153 13.9443 112.267 14.3047C111.396 14.6652 110.39 14.8454 109.249 14.8454C108.017 14.8454 106.898 14.6201 105.892 14.1696C104.901 13.719 104.112 13.0583 103.527 12.1872C102.941 11.3161 102.648 10.2574 102.648 9.01086C102.648 7.76437 102.941 6.7056 103.527 5.83453C104.112 4.96347 104.901 4.29519 105.892 3.82962C106.898 3.36404 108.017 3.13127 109.249 3.13127C110.39 3.13127 111.396 3.319 112.267 3.69445C113.138 4.05489 113.836 4.57301 114.362 5.24883C114.888 5.92464 115.196 6.74312 115.286 7.70429H112.988C112.733 6.90834 112.267 6.29257 111.591 5.85706C110.93 5.40652 110.15 5.18125 109.249 5.18125C108.513 5.18125 107.837 5.33144 107.221 5.63179C106.605 5.91714 106.11 6.34516 105.734 6.91584C105.374 7.47152 105.194 8.16986 105.194 9.01086C105.194 9.83687 105.374 10.5352 105.734 11.1059C106.11 11.6766 106.605 12.1046 107.221 12.3899C107.837 12.6603 108.513 12.7954 109.249 12.7954C110.24 12.7954 111.051 12.5777 111.682 12.1421C112.327 11.6916 112.77 11.0608 113.011 10.2499H115.308ZM116.497 3.37907H119.178L123.706 14.1471L121.544 14.5976L116.497 3.37907ZM129 3.37907L121.791 19.103H119.156L122.242 12.9531L126.319 3.37907H129Z" fill="#F4F4F4"/>
        </svg>

        <svg onClick={() => setIsFormDisplayed(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='formClose'>
          <path d="M21 21L3 3M21.0001 3L3 21.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </section>
  )
}

export default Header