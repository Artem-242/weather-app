import React from "react";

interface Props {
    id: string,
    iconStyles?: string,
}

export const SvgSelector = ({id, iconStyles} : Props) => {

    switch (id) {
        case "HeaderLogo":
            return(
                <svg  width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_444)">
                        <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z" fill="#4793FF"/>
                        <path d="M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3235 11.1622C48.3235 11.1622 46.5495 14.0707 44.5394 12.8754L41.3829 9.79712L41.1963 14.2822L8.78809 46.265L27.0688 64.5458C28.8351 64.843 30.6492 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z" fill="#424FDD"/>
                        <path d="M58.3388 29.0023L59.7103 28.1252L58.2388 27.1841C56.6468 26.1659 56.217 24.03 57.2916 22.4755L58.2847 21.0387L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.541C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4524 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4812 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1296 40.7095C31.9753 40.3038 33.7894 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4816 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.4781 42.9594 47.0326 44.0339L48.4695 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9672 39.3787C53.5614 37.5329 54.7678 35.7189 56.6269 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0266 58.3388 29.0023Z" fill="#FDBF2D"/>
                        <path d="M57.4082 33.734L58.3451 35.0645L56.6275 35.378C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4522V9.797L42.2602 11.1681C43.2847 12.7702 45.4378 13.1943 46.9917 12.0987L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5404L54.3423 15.1646L53.9932 16.7553C53.5844 18.6114 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.1651 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z" fill="#FD9827"/>
                        <path d="M41.383 40.9705C48.4777 40.9705 54.2291 35.2191 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5369 21.0296 28.5369 28.1243C28.5369 35.2191 34.2883 40.9705 41.383 40.9705Z" fill="#FFE05F"/>
                        <path d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239Z" fill="#F9CB0D"/>
                        <path d="M42.5274 32.242C42.1958 32.242 41.8694 32.2633 41.5478 32.3006C41.5794 31.9404 41.5966 31.5761 41.5966 31.2077C41.5966 24.3886 36.0687 18.8606 29.2495 18.8606C23.5703 18.8606 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8248 15.9491 27.8248C10.0886 27.8248 5.33777 32.5756 5.33777 38.4361C5.33777 44.2967 10.0886 49.0475 15.9491 49.0475H42.5274C47.1682 49.0475 50.9302 45.2854 50.9302 40.6447C50.9302 36.004 47.1682 32.242 42.5274 32.242Z" fill="white"/>
                        <path d="M50.9302 40.6436C50.9302 45.2846 47.1684 49.0466 42.5272 49.0466H28.134V18.9097C28.5016 18.8759 28.8735 18.8596 29.2498 18.8596C36.0691 18.8596 41.5969 24.3873 41.5969 31.2066C41.5969 31.5753 41.5795 31.9395 41.5478 32.2996C41.8696 32.2625 42.1956 32.2407 42.5272 32.2407C47.1684 32.2407 50.9302 36.0036 50.9302 40.6436Z" fill="#DAEFEC"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_444">
                            <rect width="65" height="65" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            );
        case "Header-scheme-icon":
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 35 35" fill="none">
                    <g clipPath="url(#clip0_23_8)">
                        <path d="M17.6667 7.09792V27.7917C12.8396 27.7917 8.91667 23.9562 8.91667 19.2312C8.91667 16.9562 9.82083 14.8125 11.4687 13.1937L17.6667 7.09792ZM17.6667 3L9.42708 11.1083C7.3125 13.1937 6 16.0667 6 19.2312C6 25.575 11.2208 30.7083 17.6667 30.7083C24.1125 30.7083 29.3333 25.575 29.3333 19.2312C29.3333 16.0667 28.0208 13.1937 25.9062 11.1083L17.6667 3Z" fill="#4793FF"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_23_8">
                            <rect width="35" height="35" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            );
        case "Sun":
            return (
                <svg className={iconStyles} width="90" height="90" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z" fill="url(#paint0_linear_2_179)"/>
                    <path d="M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778Z" fill="#FFB300"/>
                    <defs>
                        <linearGradient id="paint0_linear_2_179" x1="59.5229" y1="31.0143" x2="59.5229" y2="87.2546" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFC227"/>
                            <stop offset="1" stopColor="#FFB300"/>
                        </linearGradient>
                    </defs>
                </svg>

            );
        case "Temperature":
            return (
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_133)">
                        <path d="M15.4056 2.98156H19.1057C19.308 2.98156 19.4719 2.81759 19.4719 2.61533C19.4719 2.41308 19.308 2.24911 19.1057 2.24911H15.4056C15.2033 2.24911 15.0394 2.41308 15.0394 2.61533C15.0394 2.81759 15.2034 2.98156 15.4056 2.98156Z" fill="#4F667A"/>
                        <path d="M15.4056 4.67249H17.2556C17.4579 4.67249 17.6219 4.50852 17.6219 4.30627C17.6219 4.10401 17.4579 3.94004 17.2556 3.94004H15.4056C15.2033 3.94004 15.0394 4.10401 15.0394 4.30627C15.0394 4.50852 15.2034 4.67249 15.4056 4.67249Z" fill="#4F667A"/>
                        <path d="M19.1064 5.64909H15.4063C15.204 5.64909 15.0401 5.81306 15.0401 6.01532C15.0401 6.21757 15.204 6.38154 15.4063 6.38154H19.1064C19.3087 6.38154 19.4726 6.21757 19.4726 6.01532C19.4726 5.81306 19.3086 5.64909 19.1064 5.64909Z" fill="#4F667A"/>
                        <path d="M15.4056 8.07248H17.2556C17.4579 8.07248 17.6219 7.9085 17.6219 7.70625C17.6219 7.504 17.4579 7.34003 17.2556 7.34003H15.4056C15.2033 7.34003 15.0394 7.504 15.0394 7.70625C15.0394 7.9085 15.2034 8.07248 15.4056 8.07248Z" fill="#4F667A"/>
                        <path d="M19.1064 9.02393H15.4063C15.204 9.02393 15.0401 9.1879 15.0401 9.39016C15.0401 9.59241 15.204 9.75638 15.4063 9.75638H19.1064C19.3087 9.75638 19.4726 9.59241 19.4726 9.39016C19.4726 9.1879 19.3086 9.02393 19.1064 9.02393Z" fill="#4F667A"/>
                        <path d="M15.4056 11.4473H17.2556C17.4579 11.4473 17.6219 11.2833 17.6219 11.0811C17.6219 10.8788 17.4579 10.7149 17.2556 10.7149H15.4056C15.2033 10.7149 15.0394 10.8788 15.0394 11.0811C15.0394 11.2833 15.2034 11.4473 15.4056 11.4473Z" fill="#4F667A"/>
                        <path d="M19.1064 12.4306H15.4063C15.204 12.4306 15.0401 12.5946 15.0401 12.7968C15.0401 12.9991 15.204 13.1631 15.4063 13.1631H19.1064C19.3087 13.1631 19.4726 12.9991 19.4726 12.7968C19.4726 12.5946 19.3086 12.4306 19.1064 12.4306Z" fill="#4F667A"/>
                        <path d="M17.2556 14.1215H15.4056C15.2033 14.1215 15.0394 14.2855 15.0394 14.4878C15.0394 14.69 15.2033 14.854 15.4056 14.854H17.2556C17.4579 14.854 17.6219 14.69 17.6219 14.4878C17.6219 14.2855 17.4579 14.1215 17.2556 14.1215Z" fill="#4F667A"/>
                        <path d="M15.9548 19.7869C15.9548 21.1932 15.403 22.5111 14.402 23.499C13.4186 24.4687 12.1216 25 10.7422 25C10.7173 25 10.6924 25 10.6675 24.9995C10.4468 24.9961 10.2285 24.9795 10.0127 24.9487C8.91009 24.7934 7.88564 24.2876 7.0775 23.4872C6.11164 22.5311 5.56181 21.2616 5.52959 19.9134C5.48613 18.0862 6.40267 16.3737 7.93398 15.3937V2.80772C7.93398 1.51275 8.81488 0.419931 10.0093 0.0971641C10.2427 0.0336851 10.4883 -7.62939e-06 10.7417 -7.62939e-06C12.2896 -7.62939e-06 13.5494 1.25932 13.5494 2.80772V15.3937C15.0383 16.3478 15.9548 18.0114 15.9548 19.7869Z" fill="#E9F5FF"/>
                        <path d="M15.9548 19.7869C15.9548 21.1932 15.403 22.5111 14.402 23.499C13.4185 24.4687 12.1216 25 10.7422 25C9.82953 25 9.27726 25 9.27726 25C9.52532 25 9.77093 24.9829 10.0126 24.9487C11.1133 24.7944 12.1309 24.2944 12.9371 23.499C13.9386 22.5111 14.4899 21.1932 14.4899 19.7869C14.4899 18.0114 13.5733 17.8215 12.0845 16.8674V2.80772C12.0845 1.51275 11.2031 0.419931 10.0092 0.0971641C10.2426 0.0336851 10.4882 -7.62939e-06 10.7417 -7.62939e-06C12.2896 -7.62939e-06 13.5494 1.25932 13.5494 2.80772V15.3937C15.0382 16.3478 15.9548 18.0114 15.9548 19.7869Z" fill="#CDEAF7"/>
                        <path d="M14.4899 19.7942C14.4899 20.805 14.0934 21.7528 13.3731 22.4628C12.6666 23.1601 11.732 23.5424 10.7383 23.5424C10.7212 23.5424 10.7046 23.5424 10.688 23.5419C10.5005 23.5395 10.3149 23.5224 10.1323 23.4926C9.37299 23.3671 8.66887 23.0087 8.1083 22.4535C7.41296 21.7655 7.01695 20.8533 6.994 19.886C6.96177 18.5202 7.67469 17.2438 8.85442 16.5543C9.18988 16.3585 9.39887 15.9947 9.39887 15.6061V2.81503C9.39887 2.2945 9.69674 1.84185 10.1313 1.61918C10.3144 1.52494 10.522 1.47221 10.7417 1.47221C11.482 1.47221 12.084 2.07477 12.084 2.81503V15.6061C12.084 15.9947 12.293 16.3585 12.6285 16.5543C13.7765 17.2253 14.4899 18.4665 14.4899 19.7942Z" fill="#FF6E6E"/>
                        <path d="M14.4899 19.7942C14.4899 20.805 14.0934 21.7528 13.3731 22.4628C12.6666 23.1601 11.732 23.5424 10.7383 23.5424C10.7212 23.5424 10.7046 23.5424 10.688 23.5419C10.5005 23.5395 10.3149 23.5224 10.1323 23.4926C10.8926 23.3686 11.5938 23.0141 12.1524 22.4628C12.8726 21.7528 13.2691 20.805 13.2691 19.7942C13.2691 18.4665 12.5557 17.2253 11.4077 16.5543C11.0723 16.3585 10.8633 15.9947 10.8633 15.6061V2.81503C10.8633 2.2945 10.5654 1.84234 10.1313 1.61918C10.3144 1.52494 10.522 1.47221 10.7417 1.47221C11.482 1.47221 12.084 2.07477 12.084 2.81503V15.6061C12.084 15.9947 12.293 16.3585 12.6285 16.5543C13.7765 17.2253 14.4899 18.4665 14.4899 19.7942Z" fill="#F44E92"/>
                        <path d="M12.084 2.81503V6.01535H9.39886V2.81503C9.39886 2.2945 9.69672 1.84185 10.1313 1.61918C10.3144 1.52494 10.5219 1.47221 10.7417 1.47221C11.4819 1.47221 12.084 2.07477 12.084 2.81503Z" fill="#4F667A"/>
                        <path d="M12.084 2.81503V6.01535H10.8633V2.81503C10.8633 2.2945 10.5654 1.84234 10.1313 1.61918C10.3144 1.52494 10.522 1.47221 10.7417 1.47221C11.482 1.47221 12.084 2.07477 12.084 2.81503Z" fill="#3A5366"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_133">
                            <rect width="25" height="25" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

            );
        case "Pressure":
            return (
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_124)">
                        <path d="M10.1345 0.281303C9.81729 -0.0359516 9.34139 -0.115293 8.94479 0.201998C8.94479 0.201998 8.86549 0.201998 8.86549 0.281303C8.23094 1.07446 2.3615 8.21295 2.3615 11.8615C2.3615 15.8274 5.53416 19 9.5 19C13.4658 19 16.6385 15.8274 16.6385 11.8615C16.6385 8.21295 10.7691 1.07446 10.1345 0.281303Z" fill="url(#paint0_linear_2_124)"/>
                        <path d="M7.70508 13.9841L12.4723 9.21692L11.3506 8.09524L6.58341 12.8624L7.70508 13.9841Z" fill="white"/>
                        <path d="M7.12049 10.2752C7.55853 10.2752 7.91364 9.92004 7.91364 9.482C7.91364 9.04395 7.55853 8.68884 7.12049 8.68884C6.68244 8.68884 6.32733 9.04395 6.32733 9.482C6.32733 9.92004 6.68244 10.2752 7.12049 10.2752Z" fill="white"/>
                        <path d="M11.8795 13.4478C12.3175 13.4478 12.6726 13.0927 12.6726 12.6547C12.6726 12.2166 12.3175 11.8615 11.8795 11.8615C11.4414 11.8615 11.0863 12.2166 11.0863 12.6547C11.0863 13.0927 11.4414 13.4478 11.8795 13.4478Z" fill="white"/>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_2_124" x1="3.90805" y1="16.383" x2="15.0729" y2="5.22218" gradientUnits="userSpaceOnUse"><stop stopColor="#34CDFA"/><stop offset="1" stopColor="#E8D9F1"/>
                        </linearGradient>
                        <clipPath id="clip0_2_124"><rect width="19" height="19" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

            );
        case "Precipitation":
            return (
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4728 13.2818C15.0438 13.2816 14.6216 13.1734 14.2454 12.9672C13.8691 12.7609 13.5508 12.4633 13.3199 12.1016C13.0891 12.4634 12.7709 12.7611 12.3946 12.9674C12.0184 13.1737 11.5962 13.2818 11.1671 13.2818C10.738 13.2818 10.3158 13.1737 9.93951 12.9674C9.56324 12.7611 9.24502 12.4634 9.01424 12.1016C8.78346 12.4634 8.46523 12.7611 8.08896 12.9674C7.71269 13.1737 7.29051 13.2818 6.86141 13.2818C6.43231 13.2818 6.01012 13.1737 5.63385 12.9674C5.25758 12.7611 4.93936 12.4634 4.70858 12.1016C4.41125 12.5675 3.97083 12.9245 3.45342 13.1188C2.93601 13.3132 2.36952 13.3344 1.83898 13.1795C1.30844 13.0245 0.842471 12.7017 0.511005 12.2594C0.17954 11.8171 0.000461556 11.2793 0.000648645 10.7265C0.000648645 10.6199 0.0430306 10.5175 0.118471 10.4421C0.193911 10.3667 0.296229 10.3243 0.402918 10.3243C0.509606 10.3243 0.611925 10.3667 0.687365 10.4421C0.762805 10.5175 0.805187 10.6199 0.805187 10.7265C0.802534 10.9581 0.845853 11.1879 0.932636 11.4026C1.01942 11.6174 1.14794 11.8127 1.31076 11.9774C1.47358 12.1421 1.66746 12.2729 1.88116 12.3621C2.09487 12.4513 2.32416 12.4973 2.55575 12.4973C2.78734 12.4973 3.01663 12.4513 3.23033 12.3621C3.44404 12.2729 3.63792 12.1421 3.80073 11.9774C3.96355 11.8127 4.09208 11.6174 4.17886 11.4026C4.26564 11.1879 4.30896 10.9581 4.30631 10.7265C4.30631 10.6199 4.34869 10.5175 4.42413 10.4421C4.49957 10.3667 4.60189 10.3243 4.70858 10.3243C4.81527 10.3243 4.91759 10.3667 4.99303 10.4421C5.06847 10.5175 5.11085 10.6199 5.11085 10.7265C5.10819 10.9581 5.15151 11.1879 5.2383 11.4026C5.32508 11.6174 5.4536 11.8127 5.61642 11.9774C5.77924 12.1421 5.97312 12.2729 6.18682 12.3621C6.40053 12.4513 6.62982 12.4973 6.86141 12.4973C7.093 12.4973 7.32229 12.4513 7.53599 12.3621C7.7497 12.2729 7.94358 12.1421 8.1064 11.9774C8.26921 11.8127 8.39774 11.6174 8.48452 11.4026C8.5713 11.1879 8.61462 10.9581 8.61197 10.7265C8.61197 10.6199 8.65435 10.5175 8.72979 10.4421C8.80523 10.3667 8.90755 10.3243 9.01424 10.3243C9.12093 10.3243 9.22325 10.3667 9.29869 10.4421C9.37413 10.5175 9.41651 10.6199 9.41651 10.7265C9.41385 10.9581 9.45717 11.1879 9.54396 11.4026C9.63074 11.6174 9.75926 11.8127 9.92208 11.9774C10.0849 12.1421 10.2788 12.2729 10.4925 12.3621C10.7062 12.4513 10.9355 12.4973 11.1671 12.4973C11.3987 12.4973 11.6279 12.4513 11.8417 12.3621C12.0554 12.2729 12.2492 12.1421 12.4121 11.9774C12.5749 11.8127 12.7034 11.6174 12.7902 11.4026C12.877 11.1879 12.9203 10.9581 12.9176 10.7265C12.9176 10.6199 12.96 10.5175 13.0355 10.4421C13.1109 10.3667 13.2132 10.3243 13.3199 10.3243C13.4266 10.3243 13.5289 10.3667 13.6043 10.4421C13.6798 10.5175 13.7222 10.6199 13.7222 10.7265C13.7195 10.9581 13.7628 11.1879 13.8496 11.4026C13.9364 11.6174 14.0649 11.8127 14.2277 11.9774C14.3906 12.1421 14.5844 12.2729 14.7981 12.3621C15.0119 12.4513 15.2411 12.4973 15.4727 12.4973C15.7043 12.4973 15.9336 12.4513 16.1473 12.3621C16.361 12.2729 16.5549 12.1421 16.7177 11.9774C16.8805 11.8127 17.0091 11.6174 17.0958 11.4026C17.1826 11.1879 17.2259 10.9581 17.2233 10.7265C17.2233 10.6199 17.2657 10.5175 17.3411 10.4421C17.4166 10.3667 17.5189 10.3243 17.6256 10.3243C17.7322 10.3243 17.8346 10.3667 17.91 10.4421C17.9854 10.5175 18.0278 10.6199 18.0278 10.7265C18.0271 11.404 17.7577 12.0534 17.2787 12.5325C16.7997 13.0115 16.1503 13.281 15.4728 13.2818Z" fill="#AFD1FD"/>
                    <path d="M15.4729 18.0276C15.0438 18.0275 14.6216 17.9192 14.2454 17.7129C13.8691 17.5067 13.5508 17.2089 13.3199 16.8473C13.0892 17.2091 12.771 17.5069 12.3947 17.7132C12.0184 17.9195 11.5962 18.0277 11.1671 18.0277C10.738 18.0277 10.3158 17.9195 9.93951 17.7132C9.56323 17.5069 9.24502 17.2091 9.01428 16.8473C8.78354 17.2091 8.46533 17.5069 8.08905 17.7132C7.71278 17.9195 7.29057 18.0277 6.86145 18.0277C6.43233 18.0277 6.01012 17.9195 5.63385 17.7132C5.25757 17.5069 4.93936 17.2091 4.70862 16.8473C4.41146 17.3134 3.97109 17.6706 3.45363 17.8652C2.93618 18.0598 2.36956 18.0812 1.83887 17.9264C1.30818 17.7715 0.842051 17.4486 0.510477 17.0063C0.178902 16.5639 -0.000221949 16.0259 2.06393e-07 15.4731C2.06393e-07 15.3664 0.0423822 15.2641 0.117822 15.1887C0.193262 15.1132 0.295581 15.0708 0.402269 15.0708C0.508958 15.0708 0.611277 15.1132 0.686717 15.1887C0.762157 15.2641 0.804539 15.3664 0.804539 15.4731C0.801885 15.7047 0.845204 15.9345 0.931988 16.1492C1.01877 16.3639 1.14729 16.5593 1.31011 16.724C1.47293 16.8887 1.66681 17.0194 1.88051 17.1086C2.09422 17.1979 2.32351 17.2438 2.5551 17.2438C2.78669 17.2438 3.01598 17.1979 3.22968 17.1086C3.44339 17.0194 3.63727 16.8887 3.80009 16.724C3.9629 16.5593 4.09143 16.3639 4.17821 16.1492C4.26499 15.9345 4.30831 15.7047 4.30566 15.4731C4.30566 15.3664 4.34804 15.2641 4.42348 15.1887C4.49892 15.1132 4.60124 15.0708 4.70793 15.0708C4.81462 15.0708 4.91694 15.1132 4.99238 15.1887C5.06782 15.2641 5.1102 15.3664 5.1102 15.4731C5.10755 15.7047 5.15086 15.9345 5.23765 16.1492C5.32443 16.3639 5.45296 16.5593 5.61577 16.724C5.77859 16.8887 5.97247 17.0194 6.18617 17.1086C6.39988 17.1979 6.62917 17.2438 6.86076 17.2438C7.09235 17.2438 7.32164 17.1979 7.53535 17.1086C7.74905 17.0194 7.94293 16.8887 8.10575 16.724C8.26857 16.5593 8.39709 16.3639 8.48387 16.1492C8.57065 15.9345 8.61398 15.7047 8.61132 15.4731C8.61132 15.3664 8.6537 15.2641 8.72914 15.1887C8.80458 15.1132 8.9069 15.0708 9.01359 15.0708C9.12028 15.0708 9.2226 15.1132 9.29804 15.1887C9.37348 15.2641 9.41586 15.3664 9.41586 15.4731C9.41321 15.7047 9.45652 15.9345 9.54331 16.1492C9.63009 16.3639 9.75862 16.5593 9.92143 16.724C10.0843 16.8887 10.2781 17.0194 10.4918 17.1086C10.7055 17.1979 10.9348 17.2438 11.1664 17.2438C11.398 17.2438 11.6273 17.1979 11.841 17.1086C12.0547 17.0194 12.2486 16.8887 12.4114 16.724C12.5742 16.5593 12.7027 16.3639 12.7895 16.1492C12.8763 15.9345 12.9196 15.7047 12.917 15.4731C12.917 15.3664 12.9594 15.2641 13.0348 15.1887C13.1102 15.1132 13.2126 15.0708 13.3193 15.0708C13.4259 15.0708 13.5283 15.1132 13.6037 15.1887C13.6791 15.2641 13.7215 15.3664 13.7215 15.4731C13.7189 15.7047 13.7622 15.9345 13.849 16.1492C13.9358 16.3639 14.0643 16.5593 14.2271 16.724C14.3899 16.8887 14.5838 17.0194 14.7975 17.1086C15.0112 17.1979 15.2405 17.2438 15.4721 17.2438C15.7037 17.2438 15.933 17.1979 16.1467 17.1086C16.3604 17.0194 16.5542 16.8887 16.7171 16.724C16.8799 16.5593 17.0084 16.3639 17.0952 16.1492C17.182 15.9345 17.2253 15.7047 17.2226 15.4731C17.2226 15.3664 17.265 15.2641 17.3405 15.1887C17.4159 15.1132 17.5182 15.0708 17.6249 15.0708C17.7316 15.0708 17.8339 15.1132 17.9094 15.1887C17.9848 15.2641 18.0272 15.3664 18.0272 15.4731C18.0263 16.1503 17.7569 16.7995 17.2781 17.2783C16.7992 17.7572 16.1501 18.0267 15.4729 18.0276Z" fill="#9AA1EB"/>
                    <path d="M10.8167 1.63642L9.29792 0.117912C9.2606 0.0805331 9.21628 0.0508795 9.16749 0.0306469C9.11869 0.0104143 9.06639 0 9.01357 0C8.96075 0 8.90845 0.0104143 8.85966 0.0306469C8.81087 0.0508795 8.76655 0.0805331 8.72923 0.117912L7.21049 1.63642C7.13504 1.71187 7.09266 1.81419 7.09266 1.92088C7.09266 2.02758 7.13504 2.1299 7.21049 2.20534C7.28593 2.28079 7.38826 2.32317 7.49495 2.32317C7.60164 2.32317 7.70397 2.28079 7.77941 2.20534L8.6113 1.37345V5.38327C8.6113 5.48996 8.65369 5.59228 8.72913 5.66772C8.80457 5.74316 8.90688 5.78554 9.01357 5.78554C9.12026 5.78554 9.22258 5.74316 9.29802 5.66772C9.37346 5.59228 9.41584 5.48996 9.41584 5.38327V1.37345L10.2477 2.20534C10.2851 2.2427 10.3294 2.27233 10.3782 2.29255C10.4271 2.31277 10.4794 2.32317 10.5322 2.32317C10.585 2.32317 10.6373 2.31277 10.6861 2.29255C10.735 2.27233 10.7793 2.2427 10.8167 2.20534C10.854 2.16799 10.8836 2.12364 10.9039 2.07483C10.9241 2.02602 10.9345 1.97371 10.9345 1.92088C10.9345 1.86805 10.9241 1.81574 10.9039 1.76693C10.8836 1.71813 10.854 1.67378 10.8167 1.63642Z" fill="#BFFDFF"/>
                    <path d="M2.91284 2.86851C2.8755 2.83113 2.83116 2.80147 2.78235 2.78123C2.73354 2.761 2.68122 2.75058 2.62838 2.75058C2.57554 2.75058 2.52322 2.761 2.47441 2.78123C2.4256 2.80147 2.38126 2.83113 2.34392 2.86851L0.825408 4.38702C0.749964 4.46247 0.707581 4.56479 0.707581 4.67148C0.707581 4.77818 0.749964 4.8805 0.825408 4.95594C0.900852 5.03139 1.00318 5.07377 1.10987 5.07377C1.21656 5.07377 1.31889 5.03139 1.39433 4.95594L2.22623 4.12405V8.13387C2.22623 8.24056 2.26861 8.34288 2.34405 8.41832C2.41949 8.49376 2.52181 8.53614 2.62849 8.53614C2.73518 8.53614 2.8375 8.49376 2.91294 8.41832C2.98838 8.34288 3.03076 8.24056 3.03076 8.13387V4.12405L3.86266 4.95594C3.93854 5.02921 4.04016 5.06973 4.14564 5.06879C4.25111 5.06786 4.352 5.02553 4.42656 4.95093C4.50113 4.87633 4.54342 4.77543 4.54431 4.66995C4.54521 4.56448 4.50464 4.46288 4.43135 4.38702L2.91284 2.86851Z" fill="#BFFDFF"/>
                    <path d="M17.2017 4.38702L15.6831 2.86851C15.6458 2.83113 15.6015 2.80147 15.5527 2.78123C15.5038 2.761 15.4515 2.75058 15.3987 2.75058C15.3458 2.75058 15.2935 2.761 15.2447 2.78123C15.1959 2.80147 15.1516 2.83113 15.1142 2.86851L13.5957 4.38702C13.5573 4.42412 13.5266 4.4685 13.5055 4.51758C13.4844 4.56665 13.4733 4.61944 13.4729 4.67285C13.4724 4.72626 13.4826 4.77923 13.5028 4.82868C13.523 4.87812 13.5528 4.92304 13.5906 4.96081C13.6284 4.99859 13.6733 5.02847 13.7227 5.04871C13.7722 5.06894 13.8251 5.07913 13.8785 5.07868C13.9319 5.07823 13.9847 5.06714 14.0338 5.04607C14.0829 5.02499 14.1273 4.99436 14.1644 4.95594L14.9963 4.12405V8.13387C14.9963 8.24056 15.0387 8.34288 15.1141 8.41832C15.1896 8.49376 15.2919 8.53614 15.3986 8.53614C15.5053 8.53614 15.6076 8.49376 15.683 8.41832C15.7585 8.34288 15.8008 8.24056 15.8008 8.13387V4.12405L16.6327 4.95594C16.7082 5.03139 16.8105 5.07377 16.9172 5.07377C17.0239 5.07377 17.1262 5.03139 17.2017 4.95594C17.2771 4.8805 17.3195 4.77818 17.3195 4.67148C17.3195 4.56479 17.2771 4.46247 17.2017 4.38702Z" fill="#BFFDFF"/>
                    <path d="M6.84429 6.25539C6.79145 6.25536 6.73913 6.26574 6.69031 6.28595C6.64149 6.30615 6.59713 6.33578 6.55977 6.37314C6.52241 6.4105 6.49278 6.45486 6.47258 6.50368C6.45237 6.5525 6.44199 6.60482 6.44202 6.65766V10.0482C6.44202 10.1549 6.4844 10.2572 6.55984 10.3327C6.63528 10.4081 6.7376 10.4505 6.84429 10.4505C6.95098 10.4505 7.05329 10.4081 7.12873 10.3327C7.20418 10.2572 7.24656 10.1549 7.24656 10.0482V6.65789C7.24659 6.60504 7.2362 6.55271 7.216 6.50387C7.1958 6.45504 7.16617 6.41067 7.12882 6.37329C7.09146 6.33591 7.0471 6.30626 6.99828 6.28603C6.94946 6.2658 6.89713 6.25539 6.84429 6.25539Z" fill="#BFFDFF"/>
                    <path d="M11.183 6.25539C11.1302 6.25536 11.0779 6.26574 11.0291 6.28595C10.9802 6.30615 10.9359 6.33578 10.8985 6.37314C10.8612 6.4105 10.8315 6.45486 10.8113 6.50368C10.7911 6.5525 10.7807 6.60482 10.7808 6.65766V10.0482C10.7808 10.1549 10.8232 10.2572 10.8986 10.3327C10.974 10.4081 11.0764 10.4505 11.183 10.4505C11.2897 10.4505 11.3921 10.4081 11.4675 10.3327C11.5429 10.2572 11.5853 10.1549 11.5853 10.0482V6.65789C11.5853 6.60504 11.575 6.55271 11.5548 6.50387C11.5346 6.45504 11.5049 6.41067 11.4676 6.37329C11.4302 6.33591 11.3859 6.30626 11.337 6.28603C11.2882 6.2658 11.2359 6.25539 11.183 6.25539Z" fill="#BFFDFF"/>
                </svg>
            );
        case "Wind":
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.087 2.6087C13.9291 2.6087 12.1739 4.36436 12.1739 6.52175C12.1739 6.76175 12.3683 6.95653 12.6087 6.95653C12.8491 6.95653 13.0435 6.76175 13.0435 6.52175C13.0435 4.84349 14.4091 3.47827 16.087 3.47827C17.7648 3.47827 19.1304 4.84349 19.1304 6.52175C19.1304 8.20001 17.7648 9.56523 16.087 9.56523H0.434783C0.194783 9.56523 0 9.76001 0 10C0 10.24 0.194783 10.4348 0.434783 10.4348H16.087C18.2448 10.4348 20 8.67914 20 6.52175C20 4.36436 18.2448 2.6087 16.087 2.6087Z" fill="#007AFF"/>
                    <path d="M0.434783 7.82609H7.82609C9.50435 7.82609 10.8696 6.46087 10.8696 4.78261C10.8696 3.10435 9.50435 1.73914 7.82609 1.73914C6.14783 1.73914 4.78261 3.10435 4.78261 4.78261C4.78261 5.02261 4.97739 5.2174 5.21739 5.2174C5.45739 5.2174 5.65217 5.02261 5.65217 4.78261C5.65217 3.58392 6.62739 2.6087 7.82609 2.6087C9.02478 2.6087 10 3.58392 10 4.78261C10 5.98131 9.02478 6.95653 7.82609 6.95653H0.434783C0.194783 6.95653 0 7.15131 0 7.39131C0 7.63131 0.194783 7.82609 0.434783 7.82609Z" fill="#007AFF"/>
                    <path d="M15.2174 17.3913C14.0187 17.3913 13.0435 16.4161 13.0435 15.2174C13.0435 14.9774 12.8491 14.7826 12.6087 14.7826C12.3683 14.7826 12.1739 14.9774 12.1739 15.2174C12.1739 16.8957 13.5396 18.2609 15.2174 18.2609C16.8952 18.2609 18.2609 16.8957 18.2609 15.2174C18.2609 13.5391 16.8952 12.1739 15.2174 12.1739H0.434783C0.194783 12.1739 0 12.3687 0 12.6087C0 12.8487 0.194783 13.0435 0.434783 13.0435H15.2174C16.4161 13.0435 17.3913 14.0187 17.3913 15.2174C17.3913 16.4161 16.4161 17.3913 15.2174 17.3913Z" fill="#007AFF"/>
                </svg>
            );
        case "HeavyRain" :
            return (
                <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.21798 26.926L6.11798 31.924C5.79798 32.688 6.15598 33.568 6.91998 33.888C7.68398 34.208 8.56398 33.85 8.88398 33.086L10.984 28.088C11.304 27.324 10.946 26.444 10.182 26.124C9.41798 25.804 8.53798 26.162 8.21798 26.926ZM24.218 26.926L22.118 31.924C21.798 32.688 22.156 33.568 22.92 33.888C23.684 34.208 24.564 33.85 24.884 33.086L26.984 28.088C27.304 27.324 26.946 26.444 26.182 26.124C25.418 25.804 24.538 26.162 24.218 26.926ZM16.218 24.926L14.118 29.924C13.798 30.688 14.156 31.568 14.92 31.888C15.684 32.208 16.564 31.85 16.884 31.086L18.984 26.088C19.304 25.324 18.946 24.444 18.182 24.124C17.418 23.804 16.538 24.162 16.218 24.926Z"
                        fill="#66AFEB"/>
                    <path
                        d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
                        fill="url(#paint0_linear_2_526)"/>
                    <path
                        d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z"
                        fill="url(#paint1_radial_2_526)"/>
                    <defs>
                        <linearGradient id="paint0_linear_2_526" x1="18" y1="0" x2="18" y2="22"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9FC7FF"/>
                            <stop offset="1" stopColor="#9BC1F5"/>
                        </linearGradient>
                        <radialGradient id="paint1_radial_2_526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
                            <stop stopColor="#486DA8" stopOpacity="0.4"/>
                            <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>

            )
        case "Rain":
            return (<svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.218 26.926L8.11798 31.924C7.79798 32.688 8.15598 33.568 8.91998 33.888C9.68398 34.208 10.564 33.85 10.884 33.086L12.984 28.088C13.304 27.324 12.946 26.444 12.182 26.124C11.418 25.804 10.538 26.162 10.218 26.926ZM20.218 24.926L18.118 29.924C17.798 30.688 18.156 31.568 18.92 31.888C19.684 32.208 20.564 31.85 20.884 31.086L22.984 26.088C23.304 25.324 22.946 24.444 22.182 24.124C21.418 23.804 20.538 24.162 20.218 24.926Z"
                        fill="#66AFEB"/>
                    <path
                        d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z"
                        fill="url(#paint0_linear_2_538)"/>
                    <path
                        d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z"
                        fill="url(#paint1_radial_2_538)"/>
                    <defs>
                        <linearGradient id="paint0_linear_2_538" x1="18" y1="0" x2="18" y2="22"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9FC7FF"/>
                            <stop offset="1" stopColor="#9BC1F5"/>
                        </linearGradient>
                        <radialGradient id="paint1_radial_2_538" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
                            <stop stopColor="#486DA8" stopOpacity="0.4"/>
                            <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
            )
        case "RainWithSun":
            return (<svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M28 24C32.4183 24 36 20.4183 36 16C36 11.5817 32.4183 8 28 8C23.5817 8 20 11.5817 20 16C20 20.4183 23.5817 24 28 24Z"
                        fill="url(#paint0_linear_2_531)"/>
                    <path
                        d="M26.96 1.45999L27.48 4.41399C27.828 6.38399 24.872 6.90399 24.526 4.93399L24.006 1.97999C23.658 0.00998566 26.614 -0.510014 26.96 1.45999ZM37.546 4.98199L35.826 7.43999C34.678 9.07799 32.222 7.35799 33.368 5.71999L35.088 3.26199C36.236 1.62399 38.692 3.34399 37.546 4.98199ZM16.984 6.45399L19.442 8.17399C21.08 9.32199 19.36 11.778 17.722 10.632L15.264 8.91199C13.626 7.76399 15.346 5.30799 16.984 6.45399ZM38.282 21.366L40.74 23.086C42.378 24.234 40.658 26.69 39.02 25.544L36.562 23.824C34.924 22.676 36.644 20.22 38.282 21.366ZM42.542 14.958L39.588 15.478C37.618 15.826 37.098 12.87 39.068 12.524L42.022 12.004C43.992 11.656 44.512 14.612 42.542 14.958Z"
                        fill="#FFB300"/>
                    <path
                        d="M10.218 38.926L8.11798 43.924C7.79798 44.688 8.15598 45.568 8.91998 45.888C9.68398 46.208 10.564 45.85 10.884 45.086L12.984 40.088C13.304 39.324 12.946 38.444 12.182 38.124C11.418 37.804 10.538 38.162 10.218 38.926ZM20.218 36.926L18.118 41.924C17.798 42.688 18.156 43.568 18.92 43.888C19.684 44.208 20.564 43.85 20.884 43.086L22.984 38.088C23.304 37.324 22.946 36.444 22.182 36.124C21.418 35.804 20.538 36.162 20.218 36.926Z"
                        fill="#66AFEB"/>
                    <path
                        d="M8 34C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C11.518 14.68 14.946 12 19 12C23.97 12 28 16.03 28 21C28 21.47 27.964 21.93 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8Z"
                        fill="url(#paint1_linear_2_531)"/>
                    <path
                        d="M10 21C10 25.97 14.03 30 19 30C23.502 30 27.23 26.696 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C10.136 19.198 10 20.082 10 21Z"
                        fill="url(#paint2_radial_2_531)"/>
                    <defs>
                        <linearGradient id="paint0_linear_2_531" x1="36" y1="8" x2="24.7832" y2="19.0723"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFB301"/>
                            <stop offset="1" stopColor="#FFC533"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_2_531" x1="18" y1="12" x2="18" y2="34"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9FC7FF"/>
                            <stop offset="1" stopColor="#9BC1F5"/>
                        </linearGradient>
                        <radialGradient id="paint2_radial_2_531" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(11.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)">
                            <stop stopColor="#486DA8" stopOpacity="0.4"/>
                            <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
            )
        case "Cloudy":
            return (<svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.32"
                          d="M34 21C37.314 21 40 18.314 40 15C40 11.686 37.314 9 34 9H33.938C33.978 8.672 34 8.338 34 8C34 3.582 30.418 0 26 0C22.5 0 19.524 2.248 18.44 5.378C17.67 5.132 16.852 5 16 5C11.582 5 8 8.582 8 13C8 17.418 11.582 21 16 21C16.69 21 17.36 20.912 18 20.748V21H34Z"
                          fill="#73A5E6"/>
                    <path
                        d="M8 31C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C11.518 11.68 14.946 9 19 9C23.97 9 28 13.03 28 18C28 18.47 27.964 18.93 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8Z"
                        fill="url(#paint0_linear_2_551)"/>
                    <path
                        d="M10 18C10 22.97 14.03 27 19 27C23.502 27 27.23 23.696 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C10.136 16.198 10 17.082 10 18Z"
                        fill="url(#paint1_radial_2_551)"/>
                    <defs>
                        <linearGradient id="paint0_linear_2_551" x1="18" y1="9" x2="18" y2="31"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9FC7FF"/>
                            <stop offset="1" stopColor="#9BC1F5"/>
                        </linearGradient>
                        <radialGradient id="paint1_radial_2_551" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(13.9439 -29.6966) rotate(-90) scale(20.9574 6.69705)">
                            <stop stopColor="#486DA8" stopOpacity="0.4"/>
                            <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
            )
        default:
            return null;
    }
}