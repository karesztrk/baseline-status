import { ShadowElement } from "@karesztrk/webcomponent-base";

const ICONS = /** @type {const} */ {
  chrome: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 260 260"><linearGradient id="a" x1="145" x2="34" y1="253" y2="61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1e8e3e"/><stop offset="1" stop-color="#34a853"/></linearGradient><linearGradient id="b" x1="111" x2="222" y1="254" y2="62" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fcc934"/><stop offset="1" stop-color="#fbbc04"/></linearGradient><linearGradient id="c" x1="17" x2="239" y1="80" y2="80" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d93025"/><stop offset="1" stop-color="#ea4335"/></linearGradient><circle cx="128" cy="128" r="64" fill="#fff"/><path fill="url(#a)" d="M96 183.4A63.7 63.7 0 0 1 72.6 160L17.2 64A128 128 0 0 0 128 256l55.4-96A64 64 0 0 1 96 183.4Z"/><path fill="url(#b)" d="M192 128a63.7 63.7 0 0 1-8.6 32L128 256A128 128 0 0 0 238.9 64h-111a64 64 0 0 1 64 64Z"/><circle cx="128" cy="128" r="52" fill="#1a73e8"/><path fill="url(#c)" d="M96 72.6a63.7 63.7 0 0 1 32-8.6h110.8a128 128 0 0 0-221.7 0l55.5 96A64 64 0 0 1 96 72.6Z"/></svg>`,
  edge: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"><g clip-path="url(#a)"><path fill="url(#b)" d="M18.416 15.18a7.485 7.485 0 0 1-.845.375 8.121 8.121 0 0 1-2.86.51c-3.77 0-7.053-2.59-7.053-5.92a2.51 2.51 0 0 1 1.307-2.176c-3.41.143-4.287 3.697-4.287 5.777 0 5.897 5.427 6.487 6.598 6.487.63 0 1.578-.184 2.152-.367l.103-.032a10.224 10.224 0 0 0 5.307-4.207.319.319 0 0 0-.422-.447Z"/><path fill="url(#c)" d="M18.416 15.18a7.485 7.485 0 0 1-.845.375 8.121 8.121 0 0 1-2.86.51c-3.77 0-7.053-2.59-7.053-5.92a2.51 2.51 0 0 1 1.307-2.176c-3.41.143-4.287 3.697-4.287 5.777 0 5.897 5.427 6.487 6.598 6.487.63 0 1.578-.184 2.152-.367l.103-.032a10.224 10.224 0 0 0 5.307-4.207.319.319 0 0 0-.422-.447Z" opacity=".35"/><path fill="url(#d)" d="M8.423 19.229a6.31 6.31 0 0 1-1.809-1.698A6.43 6.43 0 0 1 8.965 7.97c.255-.12.677-.327 1.243-.319a2.582 2.582 0 0 1 2.048 1.036c.32.431.497.953.502 1.49 0-.016 1.953-6.343-6.375-6.343-3.498 0-6.375 3.315-6.375 6.232-.014 1.54.316 3.065.964 4.462a10.2 10.2 0 0 0 12.464 5.34 6.015 6.015 0 0 1-5.005-.638h-.008Z"/><path fill="url(#e)" d="M8.423 19.229a6.31 6.31 0 0 1-1.809-1.698A6.43 6.43 0 0 1 8.965 7.97c.255-.12.677-.327 1.243-.319a2.582 2.582 0 0 1 2.048 1.036c.32.431.497.953.502 1.49 0-.016 1.953-6.343-6.375-6.343-3.498 0-6.375 3.315-6.375 6.232-.014 1.54.316 3.065.964 4.462a10.2 10.2 0 0 0 12.464 5.34 6.015 6.015 0 0 1-5.005-.638h-.008Z" opacity=".41"/><path fill="url(#f)" d="M12.145 11.857c-.072.08-.271.2-.271.447 0 .207.135.414.382.582 1.14.796 3.3.685 3.307.685a4.75 4.75 0 0 0 2.415-.662A4.893 4.893 0 0 0 20.4 8.694c.024-1.785-.637-2.972-.9-3.498C17.802 1.896 14.16 0 10.2 0A10.2 10.2 0 0 0 0 10.057c.04-2.909 2.933-5.26 6.375-5.26.28 0 1.873.024 3.347.797a5.786 5.786 0 0 1 2.463 2.335c.486.845.573 1.92.573 2.35 0 .431-.215 1.06-.621 1.587l.008-.008Z"/><path fill="url(#g)" d="M12.145 11.857c-.072.08-.271.2-.271.447 0 .207.135.414.382.582 1.14.796 3.3.685 3.307.685a4.75 4.75 0 0 0 2.415-.662A4.893 4.893 0 0 0 20.4 8.694c.024-1.785-.637-2.972-.9-3.498C17.802 1.896 14.16 0 10.2 0A10.2 10.2 0 0 0 0 10.057c.04-2.909 2.933-5.26 6.375-5.26.28 0 1.873.024 3.347.797a5.786 5.786 0 0 1 2.463 2.335c.486.845.573 1.92.573 2.35 0 .431-.215 1.06-.621 1.587l.008-.008Z"/></g><defs><radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="matrix(7.60219 0 0 7.22208 12.527 14.212)" gradientUnits="userSpaceOnUse"><stop offset=".7" stop-opacity="0"/><stop offset=".9" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="e" cx="0" cy="0" r="1" gradientTransform="rotate(-81.384 12.03 4.657) scale(11.4261 9.23112)" gradientUnits="userSpaceOnUse"><stop offset=".8" stop-opacity="0"/><stop offset=".9" stop-opacity=".5"/><stop offset="1"/></radialGradient><radialGradient id="f" cx="0" cy="0" r="1" gradientTransform="rotate(92.291 -.78 2.876) scale(16.1416 34.3784)" gradientUnits="userSpaceOnUse"><stop stop-color="#35C1F1"/><stop offset=".1" stop-color="#34C1ED"/><stop offset=".2" stop-color="#2FC2DF"/><stop offset=".3" stop-color="#2BC3D2"/><stop offset=".7" stop-color="#36C752"/></radialGradient><radialGradient id="g" cx="0" cy="0" r="1" gradientTransform="matrix(2.171 7.44345 -6.05301 1.76546 19.13 6.16)" gradientUnits="userSpaceOnUse"><stop stop-color="#66EB6E"/><stop offset="1" stop-color="#66EB6E" stop-opacity="0"/></radialGradient><linearGradient id="b" x1="4.678" x2="18.894" y1="14.105" y2="14.105" gradientUnits="userSpaceOnUse"><stop stop-color="#0C59A4"/><stop offset="1" stop-color="#114A8B"/></linearGradient><linearGradient id="d" x1="12.168" x2="3.299" y1="7.937" y2="17.603" gradientUnits="userSpaceOnUse"><stop stop-color="#1B9DE2"/><stop offset=".2" stop-color="#1595DF"/><stop offset=".7" stop-color="#0680D7"/><stop offset="1" stop-color="#0078D4"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h20.4v20.4H0z"/></clipPath></defs></svg>`,
  firefox: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"><g clip-path="url(#a)"><path fill="url(#b)" d="M19.661 6.85c-.444-1.034-1.344-2.15-2.049-2.503a10.05 10.05 0 0 1 1.034 3l.002.017c-1.155-2.786-3.112-3.911-4.711-6.358l-.241-.379-.113-.204a1.76 1.76 0 0 1-.152-.392c-.011-.022-.017-.025-.023-.026-.021 0-.023.002-.024.003l-.003-.003C10.816 1.46 9.945 4.152 9.866 5.499a5.208 5.208 0 0 0-2.811 1.049 3.05 3.05 0 0 0-.263-.193 4.44 4.44 0 0 1-.029-2.417 7.53 7.53 0 0 0-2.458 1.84H4.3c-.405-.497-.376-2.135-.353-2.477a1.86 1.86 0 0 0-.341.175 7.41 7.41 0 0 0-.998.828c-.35.343-.669.714-.955 1.109v.002-.002a8.22 8.22 0 0 0-1.37 2.995l-.014.065c-.019.087-.089.523-.1.617l-.002.022A9.14 9.14 0 0 0 0 10.475v.051c.005 2.474.967 4.857 2.697 6.678s4.103 2.948 6.649 3.158a10.45 10.45 0 0 0 7.105-2.023c2.023-1.511 3.388-3.702 3.825-6.14l.046-.383a9.875 9.875 0 0 0-.662-4.967l.001.002zm-11.77 7.741.141.067.007.004-.149-.072zm10.758-7.224v-.009l.002.01-.002-.001z"/><use fill="url(#d)" href="#c"/><use fill="url(#e)" href="#c"/><path fill="url(#f)" d="m14.697 8.011.064.045a5.422 5.422 0 0 0-.949-1.198C10.637 3.784 12.98.194 13.375.01l.004-.006C10.814 1.458 9.943 4.15 9.864 5.497l.359-.018a5.29 5.29 0 0 1 2.589.681 5.07 5.07 0 0 1 1.885 1.849v.001z"/><use fill="url(#h)" href="#g"/><use fill="url(#i)" href="#g"/><path fill="url(#j)" d="m6.576 6.22.211.135a4.44 4.44 0 0 1-.029-2.417A7.53 7.53 0 0 0 4.3 5.778c.05-.001 1.531-.027 2.276.442z"/><path fill="url(#k)" d="M.093 10.761c.788 4.508 5.009 7.952 9.799 8.083 4.434.121 7.267-2.371 8.437-4.802a8.695 8.695 0 0 0 .318-6.674v-.009l.002.007c.362 2.29-.841 4.508-2.722 6.011l-.006.013c-3.665 2.891-7.172 1.744-7.881 1.276l-.149-.072c-2.137-.989-3.02-2.873-2.83-4.49-.507.007-1.006-.128-1.435-.39s-.771-.638-.984-1.084A3.933 3.933 0 0 1 4.5 8.084a3.96 3.96 0 0 1 1.897.4 5.24 5.24 0 0 0 3.834.146c-.004-.08-1.781-.765-2.474-1.426-.37-.353-.546-.524-.702-.651a2.909 2.909 0 0 0-.263-.193l-.211-.135c-.745-.469-2.226-.443-2.275-.442h-.005c-.405-.497-.376-2.135-.353-2.477a1.86 1.86 0 0 0-.341.175 7.41 7.41 0 0 0-.998.828 8.623 8.623 0 0 0-.959 1.107A8.22 8.22 0 0 0 .28 8.409c-.005.02-.368 1.556-.189 2.353h.002z"/><path fill="url(#l)" d="M13.812 6.858c.373.355.692.758.948 1.199l.153.121c2.315 2.067 1.102 4.988 1.012 5.195 1.881-1.5 3.083-3.72 2.722-6.011-1.155-2.789-3.114-3.914-4.711-6.361l-.241-.379-.113-.204a1.76 1.76 0 0 1-.152-.392c-.011-.022-.017-.025-.023-.026-.021 0-.023.002-.024.003-.402.185-2.745 3.777.43 6.849l-.001.004z"/><path fill="url(#m)" d="M14.913 8.179a2.099 2.099 0 0 0-.153-.121l-.063-.045a3.614 3.614 0 0 0-2.462-.579c3.673 1.778 2.688 7.902-2.403 7.672a4.696 4.696 0 0 1-1.329-.248l-.3-.119-.172-.08.007.004c.71.469 4.216 1.616 7.881-1.276l.006-.013c.091-.207 1.305-3.128-1.012-5.195l.001-.001z"/><path fill="url(#n)" d="M5.625 11.419S6.096 9.718 9 9.718c.314 0 1.212-.848 1.228-1.094a5.24 5.24 0 0 1-3.834-.146 3.96 3.96 0 0 0-1.897-.4 3.959 3.959 0 0 0-1.858.546c.213.446.555.822.984 1.084s.928.397 1.435.39c-.189 1.617.694 3.5 2.83 4.49l.141.067c-1.247-.624-2.277-1.804-2.405-3.235v-.001z"/><path fill="url(#o)" d="M19.661 6.845c-.444-1.034-1.344-2.15-2.049-2.503a10.05 10.05 0 0 1 1.034 3l.002.017c-1.155-2.786-3.112-3.911-4.711-6.358l-.241-.379-.112-.204a1.779 1.779 0 0 1-.152-.392c-.011-.022-.017-.025-.023-.026-.02 0-.023.002-.024.003L13.382 0c-2.565 1.454-3.436 4.146-3.515 5.493l.359-.018a5.29 5.29 0 0 1 2.589.681A5.07 5.07 0 0 1 14.7 8.005a3.614 3.614 0 0 0-2.462-.579c3.673 1.778 2.688 7.902-2.403 7.672a4.696 4.696 0 0 1-1.329-.248l-.3-.119-.172-.08.007.004-.149-.072.141.067c-1.247-.624-2.277-1.804-2.405-3.235 0 0 .471-1.701 3.375-1.701.314 0 1.212-.848 1.228-1.094-.004-.08-1.781-.765-2.474-1.426l-.702-.651a3.05 3.05 0 0 0-.263-.193 4.44 4.44 0 0 1-.029-2.417 7.53 7.53 0 0 0-2.458 1.84H4.3c-.405-.497-.376-2.135-.353-2.477a1.86 1.86 0 0 0-.341.175 7.41 7.41 0 0 0-.998.828c-.35.343-.669.714-.955 1.109a8.22 8.22 0 0 0-1.37 2.995l-.014.065-.118.624A11.15 11.15 0 0 0 0 10.473v.051c.005 2.474.967 4.857 2.697 6.678S6.8 20.15 9.347 20.36a10.45 10.45 0 0 0 7.105-2.023c2.023-1.511 3.388-3.702 3.825-6.14l.046-.383a9.875 9.875 0 0 0-.662-4.967l.001-.001z"/></g><defs><radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="matrix(21.2899 0 0 20.6149 17.653 2.3)" href="#p"><stop offset=".129" stop-color="#ffbd4f"/><stop offset=".186" stop-color="#ffac31"/><stop offset=".247" stop-color="#ff9d17"/><stop offset=".283" stop-color="#ff980e"/><stop offset=".403" stop-color="#ff563b"/><stop offset=".467" stop-color="#ff3750"/><stop offset=".71" stop-color="#f5156c"/><stop offset=".782" stop-color="#eb0878"/><stop offset=".86" stop-color="#e50080"/></radialGradient><radialGradient id="e" cx="0" cy="0" r="1" gradientTransform="matrix(21.2899 0 0 20.6149 9.749 10.72)" href="#p"><stop offset=".3" stop-color="#960e18"/><stop offset=".351" stop-color="#b11927" stop-opacity=".74"/><stop offset=".435" stop-color="#db293d" stop-opacity=".343"/><stop offset=".497" stop-color="#f5334b" stop-opacity=".094"/><stop offset=".53" stop-color="#ff3750" stop-opacity="0"/></radialGradient><radialGradient id="f" cx="0" cy="0" r="1" gradientTransform="matrix(15.422 0 0 14.9331 12.383 -2.292)" href="#p"><stop offset=".132" stop-color="#fff44f"/><stop offset=".252" stop-color="#ffdc3e"/><stop offset=".506" stop-color="#ff9d12"/><stop offset=".526" stop-color="#ff980e"/></radialGradient><radialGradient id="h" cx="0" cy="0" r="1" gradientTransform="matrix(10.1364 0 0 9.81506 7.377 16.078)" href="#p"><stop offset=".353" stop-color="#3a8ee6"/><stop offset=".472" stop-color="#5c79f0"/><stop offset=".669" stop-color="#9059ff"/><stop offset="1" stop-color="#c139e6"/></radialGradient><radialGradient id="i" cx="0" cy="0" r="1" gradientTransform="matrix(5.22467 -1.22312 1.39136 5.94334 10.778 8.95)" href="#p"><stop offset=".206" stop-color="#9059ff" stop-opacity="0"/><stop offset=".278" stop-color="#8c4ff3" stop-opacity=".064"/><stop offset=".747" stop-color="#7716a8" stop-opacity=".45"/><stop offset=".975" stop-color="#6e008b" stop-opacity=".6"/></radialGradient><radialGradient id="j" cx="0" cy="0" r="1" gradientTransform="matrix(7.29338 0 0 7.06215 9.485 1.535)" href="#p"><stop stop-color="#ffe226"/><stop offset=".121" stop-color="#ffdb27"/><stop offset=".295" stop-color="#ffc82a"/><stop offset=".502" stop-color="#ffa930"/><stop offset=".732" stop-color="#ff7e37"/><stop offset=".792" stop-color="#ff7139"/></radialGradient><radialGradient id="k" cx="0" cy="0" r="1" gradientTransform="matrix(31.1181 0 0 30.1315 15.282 -3.057)" href="#p"><stop offset=".113" stop-color="#fff44f"/><stop offset=".456" stop-color="#ff980e"/><stop offset=".622" stop-color="#ff5634"/><stop offset=".716" stop-color="#ff3647"/><stop offset=".904" stop-color="#e31587"/></radialGradient><radialGradient id="l" cx="0" cy="0" r="1" gradientTransform="matrix(2.39314 21.95888 -14.87234 1.62083 12.695 -1.386)" href="#p"><stop stop-color="#fff44f"/><stop offset=".06" stop-color="#ffe847"/><stop offset=".168" stop-color="#ffc830"/><stop offset=".304" stop-color="#ff980e"/><stop offset=".356" stop-color="#ff8b16"/><stop offset=".455" stop-color="#ff672a"/><stop offset=".57" stop-color="#ff3647"/><stop offset=".737" stop-color="#e31587"/></radialGradient><radialGradient id="m" cx="0" cy="0" r="1" gradientTransform="matrix(19.4244 0 0 18.8086 9.485 4.087)" href="#p"><stop offset=".137" stop-color="#fff44f"/><stop offset=".48" stop-color="#ff980e"/><stop offset=".592" stop-color="#ff5634"/><stop offset=".655" stop-color="#ff3647"/><stop offset=".904" stop-color="#e31587"/></radialGradient><radialGradient id="n" cx="0" cy="0" r="1" gradientTransform="matrix(21.2609 0 0 20.5869 14.491 5.107)" href="#p"><stop offset=".094" stop-color="#fff44f"/><stop offset=".231" stop-color="#ffe141"/><stop offset=".509" stop-color="#ffaf1e"/><stop offset=".626" stop-color="#ff980e"/></radialGradient><linearGradient id="b" x1="18.309" x2="1.883" y1="3.165" y2="19.533" href="#p"><stop offset=".048" stop-color="#fff44f"/><stop offset=".111" stop-color="#ffe847"/><stop offset=".225" stop-color="#ffc830"/><stop offset=".368" stop-color="#ff980e"/><stop offset=".401" stop-color="#ff8b16"/><stop offset=".462" stop-color="#ff672a"/><stop offset=".534" stop-color="#ff3647"/><stop offset=".705" stop-color="#e31587"/></linearGradient><linearGradient id="o" x1="18.103" x2="4.144" y1="3.076" y2="17.494" href="#p"><stop offset=".167" stop-color="#fff44f" stop-opacity=".8"/><stop offset=".266" stop-color="#fff44f" stop-opacity=".634"/><stop offset=".489" stop-color="#fff44f" stop-opacity=".217"/><stop offset=".6" stop-color="#fff44f" stop-opacity="0"/></linearGradient><linearGradient id="p" gradientUnits="userSpaceOnUse"/><path id="c" d="M19.661 6.85c-.444-1.034-1.344-2.15-2.049-2.503a10.05 10.05 0 0 1 1.034 3v.009l.002.01a8.695 8.695 0 0 1-.318 6.674c-1.17 2.432-4.002 4.924-8.437 4.802-4.79-.131-9.011-3.574-9.799-8.083-.144-.711 0-1.072.072-1.649a7.21 7.21 0 0 0-.164 1.364v.051c.005 2.474.967 4.857 2.697 6.678s4.103 2.948 6.649 3.158a10.45 10.45 0 0 0 7.105-2.023c2.023-1.511 3.388-3.702 3.825-6.14l.046-.383a9.869 9.869 0 0 0-.663-4.968l-.001.001z"/><path id="g" d="M10.228 8.626C10.211 8.872 9.314 9.72 9 9.72c-2.904 0-3.375 1.701-3.375 1.701.129 1.432 1.159 2.613 2.405 3.235l.172.08.3.119c.428.146.876.23 1.329.248 5.091.231 6.076-5.894 2.403-7.672a3.613 3.613 0 0 1 2.462.579c-.449-.767-1.099-1.405-1.885-1.849s-1.679-.679-2.589-.681l-.359.018a5.208 5.208 0 0 0-2.811 1.049c.156.128.331.298.702.651.693.661 2.47 1.346 2.474 1.426v.002z"/><clipPath id="a"><path fill="#fff" d="M0 0h20.4v20.4H0z"/></clipPath></defs></svg>`,
  safari: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"><g clip-path="url(#a)"><path fill="#000" d="M19.505 10.524a8.76 8.76 0 0 1-.708 3.448 8.995 8.995 0 0 1-2.017 2.922 9.33 9.33 0 0 1-3.019 1.953 9.568 9.568 0 0 1-7.12 0 9.33 9.33 0 0 1-3.019-1.953 8.995 8.995 0 0 1-2.017-2.922 8.761 8.761 0 0 1-.708-3.448c0-2.39.98-4.68 2.725-6.37a9.461 9.461 0 0 1 6.58-2.638 9.57 9.57 0 0 1 3.56.685 9.33 9.33 0 0 1 3.018 1.953 8.995 8.995 0 0 1 2.017 2.923 8.76 8.76 0 0 1 .708 3.447Z" opacity=".53"/><path fill="url(#b)" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round" stroke-width=".352" d="M19.859 9.729c0 1.275-.25 2.538-.736 3.716a9.712 9.712 0 0 1-2.093 3.15 9.655 9.655 0 0 1-3.134 2.106 9.612 9.612 0 0 1-10.525-2.105A9.738 9.738 0 0 1 .542 9.729a9.738 9.738 0 0 1 2.83-6.867A9.612 9.612 0 0 1 13.896.757a9.654 9.654 0 0 1 3.133 2.105 9.713 9.713 0 0 1 2.093 3.15 9.757 9.757 0 0 1 .736 3.717Z"/><path fill="url(#c)" d="M19.102 9.729c0 2.373-.938 4.65-2.607 6.329a8.877 8.877 0 0 1-6.294 2.62 8.877 8.877 0 0 1-6.295-2.62A8.975 8.975 0 0 1 1.3 9.728c0-2.373.938-4.65 2.607-6.328A8.877 8.877 0 0 1 10.201.778c2.36 0 4.624.943 6.294 2.622a8.975 8.975 0 0 1 2.607 6.329Z"/><path fill="#F4F2F3" d="M10.2 1.245a.13.13 0 0 0-.13.13v1.506a.13.13 0 1 0 .26 0V1.376a.13.13 0 0 0-.13-.13Zm-.849.054h-.026a.13.13 0 0 0-.116.144l.066.63a.13.13 0 1 0 .258-.028l-.065-.63A.13.13 0 0 0 9.35 1.3Zm1.704 0a.13.13 0 0 0-.116.117l-.066.63a.13.13 0 1 0 .258.027l.066-.63a.13.13 0 0 0-.142-.143Zm-2.576.127-.026.003a.13.13 0 0 0-.1.155l.31 1.472a.13.13 0 1 0 .254-.054l-.31-1.472a.13.13 0 0 0-.128-.104Zm3.448.002a.13.13 0 0 0-.127.103l-.311 1.472a.13.13 0 0 0 .1.155.13.13 0 0 0 .153-.1l.312-1.473a.13.13 0 0 0-.127-.157Zm-4.28.234a.13.13 0 0 0-.135.17l.195.603a.13.13 0 0 0 .163.084.13.13 0 0 0 .084-.165l-.195-.602a.13.13 0 0 0-.112-.09Zm5.108 0a.13.13 0 0 0-.112.09l-.195.603a.13.13 0 0 0 .083.164.13.13 0 0 0 .164-.084l.195-.602a.13.13 0 0 0-.135-.17Zm-5.931.303a.13.13 0 0 0-.116.184l.608 1.375a.13.13 0 0 0 .17.066.13.13 0 0 0 .067-.172l-.608-1.375a.13.13 0 0 0-.121-.078Zm6.763.005a.13.13 0 0 0-.12.077l-.61 1.375a.13.13 0 0 0 .065.172.13.13 0 0 0 .172-.066l.61-1.374a.13.13 0 0 0-.117-.184Zm-7.527.402a.13.13 0 0 0-.121.196l.314.548a.13.13 0 0 0 .178.047.13.13 0 0 0 .047-.178l-.315-.548a.13.13 0 0 0-.103-.065Zm8.28 0a.13.13 0 0 0-.102.065l-.315.548a.13.13 0 0 0 .047.178.129.129 0 0 0 .178-.048l.314-.548a.13.13 0 0 0-.121-.195Zm-9.022.465a.13.13 0 0 0-.1.207l.878 1.218a.13.13 0 0 0 .182.03.13.13 0 0 0 .029-.183l-.88-1.218a.13.13 0 0 0-.109-.054Zm9.774.007a.13.13 0 0 0-.11.053l-.88 1.217a.13.13 0 0 0 .028.183c.059.042.14.03.182-.029l.88-1.217a.13.13 0 0 0-.1-.207Zm-10.437.552a.13.13 0 0 0-.103.218l.421.47c.048.054.13.058.183.01a.13.13 0 0 0 .01-.184l-.421-.47a.13.13 0 0 0-.09-.044Zm11.092.001a.13.13 0 0 0-.09.043l-.421.47a.13.13 0 0 0 .01.185.129.129 0 0 0 .183-.01l.421-.47a.13.13 0 0 0-.103-.218ZM4.019 4.01a.13.13 0 0 0-.08.227l1.113 1.007a.129.129 0 0 0 .183-.01.13.13 0 0 0-.01-.184L4.114 4.043a.129.129 0 0 0-.094-.033Zm12.366.004a.129.129 0 0 0-.093.034l-1.114 1.006a.13.13 0 0 0-.01.184c.049.054.13.058.184.01l1.113-1.006a.13.13 0 0 0-.08-.228Zm-12.894.68a.13.13 0 0 0-.08.236l.509.371c.058.043.139.03.18-.028a.13.13 0 0 0-.028-.183l-.51-.372a.13.13 0 0 0-.071-.025Zm13.422.004a.13.13 0 0 0-.071.025l-.51.372a.13.13 0 0 0-.029.182.13.13 0 0 0 .181.029l.51-.372a.13.13 0 0 0-.08-.236Zm-13.916.724a.13.13 0 0 0-.056.243l1.297.753a.13.13 0 0 0 .13-.226L3.07 5.439a.13.13 0 0 0-.074-.017Zm14.407 0a.128.128 0 0 0-.074.017l-1.296.753a.13.13 0 0 0 .13.226l1.296-.753a.13.13 0 0 0-.056-.243ZM2.624 6.2a.13.13 0 0 0-.055.25l.574.258a.13.13 0 0 0 .106-.238l-.575-.259a.129.129 0 0 0-.05-.011Zm15.156.005a.13.13 0 0 0-.05.012l-.576.257a.13.13 0 0 0 .106.239l.575-.258a.13.13 0 0 0-.055-.25Zm-15.49.807a.13.13 0 0 0-.03.254l1.425.466a.13.13 0 0 0 .08-.248l-1.423-.466a.13.13 0 0 0-.051-.006Zm15.822.006a.125.125 0 0 0-.051.006l-1.424.465a.13.13 0 0 0 .08.248l1.424-.465a.13.13 0 0 0-.03-.254Zm-16.029.846a.13.13 0 0 0-.127.104.13.13 0 0 0 .1.155l.616.131a.13.13 0 0 0 .153-.1.13.13 0 0 0-.1-.155l-.615-.132a.127.127 0 0 0-.027-.003Zm16.235.002a.159.159 0 0 0-.027.002L17.677 8a.13.13 0 0 0-.1.155.13.13 0 0 0 .154.1l.615-.131a.13.13 0 0 0 .1-.155.13.13 0 0 0-.127-.103ZM1.926 8.72a.13.13 0 0 0-.116.116.13.13 0 0 0 .116.143l1.488.159a.13.13 0 0 0 .143-.116.13.13 0 0 0-.116-.144l-1.488-.158h-.027Zm16.55.011h-.027l-1.489.156a.13.13 0 0 0-.115.144.13.13 0 0 0 .143.116l1.488-.156a.13.13 0 0 0 .116-.144.13.13 0 0 0-.116-.116ZM1.9 9.598a.13.13 0 0 0-.13.13c0 .073.058.131.13.131h.63a.13.13 0 0 0 .13-.13.13.13 0 0 0-.13-.13H1.9Zm15.969 0a.13.13 0 0 0-.13.13c0 .073.058.131.13.131h.63a.13.13 0 0 0 .13-.13.13.13 0 0 0-.13-.13h-.63Zm-14.43.712h-.027l-1.488.156a.13.13 0 0 0-.116.144.13.13 0 0 0 .142.116l1.49-.157a.13.13 0 0 0 .115-.143.13.13 0 0 0-.116-.116Zm13.52.01a.13.13 0 0 0-.116.115.13.13 0 0 0 .115.144l1.489.158a.13.13 0 0 0 .143-.116.13.13 0 0 0-.116-.144l-1.488-.158a.123.123 0 0 0-.027 0Zm-14.262.88a.13.13 0 0 0-.027.003l-.616.132a.13.13 0 0 0-.1.155.13.13 0 0 0 .154.1l.616-.131a.13.13 0 0 0 .1-.155.13.13 0 0 0-.127-.103Zm15.005.002a.13.13 0 0 0-.128.103.13.13 0 0 0 .1.155l.616.132a.13.13 0 0 0 .054-.255l-.616-.132a.131.131 0 0 0-.026-.003Zm-13.968.514a.126.126 0 0 0-.051.006l-1.424.465a.13.13 0 0 0 .08.248l1.424-.465a.13.13 0 0 0-.03-.254Zm12.93.004a.13.13 0 0 0-.03.254l1.424.467a.13.13 0 0 0 .08-.248l-1.423-.466a.129.129 0 0 0-.051-.007ZM3.192 12.735a.13.13 0 0 0-.05.011l-.576.258a.13.13 0 0 0 .105.238l.576-.257a.13.13 0 0 0-.055-.25Zm14.015.005a.13.13 0 0 0-.055.25l.575.258a.13.13 0 0 0 .106-.238l-.575-.259a.128.128 0 0 0-.05-.011Zm-12.895.283a.127.127 0 0 0-.074.017l-1.297.753a.13.13 0 0 0 .13.226l1.296-.753a.13.13 0 0 0-.055-.243Zm11.777 0a.13.13 0 0 0-.056.243l1.297.753a.13.13 0 0 0 .177-.048.13.13 0 0 0-.047-.178l-1.297-.753a.128.128 0 0 0-.074-.017Zm-12.1 1.104a.13.13 0 0 0-.073.025l-.51.372a.13.13 0 0 0-.028.182.129.129 0 0 0 .181.03l.51-.373a.13.13 0 0 0-.08-.236Zm12.42.005a.13.13 0 0 0-.08.236l.51.372c.057.042.138.03.18-.03a.13.13 0 0 0-.028-.181l-.51-.373a.13.13 0 0 0-.072-.024Zm-11.267.045a.13.13 0 0 0-.093.033l-1.113 1.006a.13.13 0 0 0-.01.184c.048.054.13.059.183.01l1.113-1.006a.13.13 0 0 0-.08-.227Zm10.113.003a.13.13 0 0 0-.08.227l1.113 1.008a.13.13 0 0 0 .183-.01.13.13 0 0 0-.01-.184l-1.112-1.007a.13.13 0 0 0-.094-.034Zm-9.056.956a.129.129 0 0 0-.11.054l-.88 1.217a.13.13 0 0 0 .028.182c.058.043.139.03.181-.028l.88-1.218a.13.13 0 0 0-.1-.207Zm7.996.006a.13.13 0 0 0-.1.207l.878 1.218a.129.129 0 0 0 .181.029.13.13 0 0 0 .03-.182l-.88-1.219a.13.13 0 0 0-.109-.053Zm-9.133.188a.13.13 0 0 0-.09.043l-.421.47a.13.13 0 0 0 .01.184.129.129 0 0 0 .183-.01l.421-.47a.13.13 0 0 0-.103-.218Zm10.276 0a.13.13 0 0 0-.103.218l.421.47c.048.054.13.058.183.01a.13.13 0 0 0 .01-.184l-.421-.47a.13.13 0 0 0-.09-.044Zm-7.91.522a.13.13 0 0 0-.12.078l-.61 1.374a.13.13 0 0 0 .065.172.13.13 0 0 0 .171-.066l.61-1.374a.13.13 0 0 0-.116-.184Zm5.536.004a.13.13 0 0 0-.116.184l.608 1.375a.13.13 0 0 0 .171.066.13.13 0 0 0 .066-.172l-.608-1.376a.13.13 0 0 0-.12-.077Zm-6.607.421a.13.13 0 0 0-.104.065l-.315.549a.13.13 0 0 0 .048.178.13.13 0 0 0 .177-.048l.315-.548a.13.13 0 0 0-.121-.196Zm7.687 0a.13.13 0 0 0-.121.195l.315.549a.13.13 0 0 0 .177.048.13.13 0 0 0 .047-.178l-.314-.549a.13.13 0 0 0-.104-.065Zm-5.258.02a.13.13 0 0 0-.128.103l-.31 1.473a.13.13 0 1 0 .253.054l.311-1.473a.13.13 0 0 0-.126-.157Zm2.824 0-.026.003a.13.13 0 0 0-.1.155l.31 1.473a.13.13 0 0 0 .154.1.13.13 0 0 0 .1-.154l-.31-1.473a.13.13 0 0 0-.128-.103Zm-1.41.15a.13.13 0 0 0-.13.13v1.505a.13.13 0 1 0 .26 0v-1.505a.13.13 0 0 0-.13-.13Zm-2.382.486a.13.13 0 0 0-.112.09l-.195.602a.13.13 0 0 0 .084.164.13.13 0 0 0 .163-.084l.195-.602a.13.13 0 0 0-.135-.17Zm4.764 0a.13.13 0 0 0-.135.17l.195.602a.13.13 0 0 0 .163.084.13.13 0 0 0 .084-.164l-.195-.602a.13.13 0 0 0-.112-.09Zm-3.196.335a.13.13 0 0 0-.117.116l-.065.63a.13.13 0 1 0 .258.027l.066-.63a.13.13 0 0 0-.142-.143Zm1.624 0a.13.13 0 0 0-.142.143l.065.631a.13.13 0 1 0 .258-.027l-.065-.63a.13.13 0 0 0-.116-.116Z"/><g filter="url(#d)" opacity=".409"><path fill="#000" d="m16.283 4.51-7.1 4.147-4.49 7.107 6.568-4.892 5.022-6.363Z"/></g><path fill="#FF5150" d="M11.218 10.8 9.183 8.657l7.22-4.883-5.185 7.026Z"/><path fill="#F1F1F1" d="M11.218 10.8 9.183 8.657l-5.184 7.027 7.22-4.884Z"/><path fill="#000" d="m3.999 15.684 7.22-4.884 5.184-7.026-12.404 11.91Z" opacity=".243"/></g><defs><radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="matrix(9.65803 0 0 9.71116 10.24 8.424)" gradientUnits="userSpaceOnUse"><stop stop-color="#06C2E7"/><stop offset=".25" stop-color="#0DB8EC"/><stop offset=".5" stop-color="#12AEF1"/><stop offset=".75" stop-color="#1F86F9"/><stop offset="1" stop-color="#107DDD"/></radialGradient><linearGradient id="b" x1="10.2" x2="10.2" y1="19.44" y2=".018" gradientUnits="userSpaceOnUse"><stop stop-color="#BDBDBD"/><stop offset="1" stop-color="#fff"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h20.4v20.4H0z"/></clipPath><filter id="d" width="16.679" height="16.344" x="2.149" y="1.964" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_1510_9490" stdDeviation="1.272"/></filter></defs></svg>`,
};

const API_ENDPOINT = "https://api.webstatus.dev/v1/features/";

const BASELINE_DEFS = /** @type {const} */ {
  limited: {
    title: "Limited availability",
    defaultDescription:
      "This feature is not Baseline because it does not work in some of the most widely-used browsers.",
  },
  newly: {
    title: "",
    defaultDescription:
      "This feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.",
  },
  widely: {
    title: "Widely available",
    defaultDescription:
      "This feature is well established and works across many devices and browser versions.",
  },
  loading: {
    title: "Loading",
    defaultDescription: "",
  },
  no_data: {
    title: "Unknown availability",
    defaultDescription:
      "We currently don’t have browser support information about this feature.",
  },
};

const SUPPORT_ICONS = /** @type {const} */ {
  available: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="21"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M1.253 3.31a8.843 8.843 0 0 1 5.47-1.882c4.882 0 8.838 3.927 8.838 8.772 0 4.845-3.956 8.772-8.837 8.772a8.842 8.842 0 0 1-5.47-1.882c-.237.335-.49.657-.758.966a10.074 10.074 0 0 0 6.228 2.14c5.562 0 10.07-4.475 10.07-9.996 0-5.52-4.508-9.996-10.07-9.996-2.352 0-4.514.8-6.228 2.14.268.309.521.631.757.966Z"
    />
    <path
      fill="currentColor"
      d="M11.348 8.125 6.34 13.056l-3.006-2.954 1.002-.985 1.999 1.965 4.012-3.942 1.002.985Z"
    />
  </svg>`,
  unavailable: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="21"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M1.254 3.31a8.843 8.843 0 0 1 5.47-1.882c4.881 0 8.838 3.927 8.838 8.772 0 4.845-3.957 8.772-8.838 8.772a8.842 8.842 0 0 1-5.47-1.882c-.236.335-.49.657-.757.966a10.074 10.074 0 0 0 6.227 2.14c5.562 0 10.071-4.475 10.071-9.996 0-5.52-4.509-9.996-10.07-9.996-2.352 0-4.515.8-6.228 2.14.268.309.52.631.757.966Z"
    />
    <path
      fill="currentColor"
      d="m10.321 8.126-1.987 1.972 1.987 1.972-.993.986-1.987-1.972-1.987 1.972-.993-.986 1.986-1.972-1.986-1.972.993-.986 1.987 1.972L9.328 7.14l.993.986Z"
    />
  </svg>`,
  no_data: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="21"
    viewBox="0 0 17 21"
    fill="none"
  >
    <path
      d="M7.18169 12.2783H5.98706C5.99134 11.8703 6.02774 11.5367 6.09625 11.2775C6.16904 11.014 6.28679 10.7738 6.4495 10.5571C6.61221 10.3404 6.82844 10.0939 7.0982 9.8176C7.29516 9.61785 7.475 9.43085 7.63771 9.2566C7.8047 9.0781 7.93958 8.88685 8.04235 8.68285C8.14511 8.4746 8.19649 8.22598 8.19649 7.93698C8.19649 7.64373 8.14297 7.39085 8.03592 7.17835C7.93316 6.96585 7.77901 6.80223 7.57348 6.68748C7.37224 6.57273 7.12175 6.51535 6.82202 6.51535C6.57367 6.51535 6.33817 6.55998 6.11552 6.64923C5.89286 6.73848 5.71302 6.8766 5.576 7.0636C5.43898 7.24635 5.36833 7.48648 5.36405 7.78398H4.17584C4.18441 7.30373 4.3043 6.89148 4.53552 6.54723C4.77102 6.20298 5.08787 5.93948 5.48609 5.75673C5.8843 5.57398 6.32961 5.4826 6.82202 5.4826C7.36581 5.4826 7.82825 5.58035 8.20934 5.77585C8.5947 5.97135 8.88801 6.25185 9.08926 6.61735C9.2905 6.9786 9.39113 7.40785 9.39113 7.9051C9.39113 8.2876 9.31191 8.64035 9.15348 8.96335C8.99934 9.2821 8.80023 9.58173 8.55617 9.86222C8.3121 10.1427 8.05305 10.4105 7.77901 10.6655C7.54351 10.8822 7.38508 11.1266 7.30373 11.3986C7.22237 11.6706 7.18169 11.9639 7.18169 12.2783ZM5.93568 14.2992C5.93568 14.108 5.99562 13.9465 6.11552 13.8147C6.23541 13.683 6.40882 13.6171 6.63576 13.6171C6.86698 13.6171 7.04253 13.683 7.16243 13.8147C7.28232 13.9465 7.34226 14.108 7.34226 14.2992C7.34226 14.482 7.28232 14.6392 7.16243 14.771C7.04253 14.9027 6.86698 14.9686 6.63576 14.9686C6.40882 14.9686 6.23541 14.9027 6.11552 14.771C5.99562 14.6392 5.93568 14.482 5.93568 14.2992Z"
      fill="currentColor"
    />
    <path
      d="M1.25317 3.31021C2.75786 2.13162 4.65827 1.4281 6.72373 1.4281C11.6047 1.4281 15.5615 5.35546 15.5615 10.2001C15.5615 15.0447 11.6047 18.9721 6.72373 18.9721C4.65827 18.9721 2.75786 18.2686 1.25317 17.09C1.01715 17.425 0.764387 17.7475 0.496094 18.0563C2.20987 19.3966 4.37247 20.1961 6.72373 20.1961C12.2857 20.1961 16.7946 15.7207 16.7946 10.2001C16.7946 4.67946 12.2857 0.204102 6.72373 0.204102C4.37247 0.204102 2.20987 1.00363 0.496094 2.34391C0.764386 2.65272 1.01715 2.97522 1.25317 3.31021Z"
      fill="currentColor"
    />
  </svg>`,
};

/**
 * A web component that renders Baseline support information based on the
 * Web Features project.
 * @see https://github.com/web-platform-dx/web-features/
 *
 * Example usage:
 *
 * <baseline-status featureId="anchor-positioning"></baseline-status>
 */

/**
 * @typedef Feature
 * @property {BaselineType} baseline
 * @property {string} [feature_id]
 * @property {string} name
 * @property {SpecType} [spec]
 * @property {BrowserImplementations} [browser_implementations]
 */

/**
 * @typedef BaselineType
 * @property {string} [high_date]
 * @property {string} [low_date]
 * @property {Status} status
 */

/**
 * @typedef BrowserImplementations
 * @property {BrowserImplementation} chrome
 * @property {BrowserImplementation} edge
 * @property {BrowserImplementation} firefox
 * @property {BrowserImplementation} safari
 */

/**
 * @typedef BrowserImplementation
 * @property {string} date
 * @property {Status} status
 * @property {string} version
 */

/** @typedef {'limited' | 'newly' | 'widely' | 'no_data'} Status */

/**
 * @typedef SpecType
 * @property {object[]} links
 */
class BaselineStatus extends ShadowElement {
  /**
   * @type {Feature}
   */
  feature;

  styles = `
      :host {
        --baseline-status-color-limited: light-dark(#ea8600, #f09418);
        --baseline-status-color-newly: light-dark(#1a73e8, #4185ff);
        --baseline-status-color-widely: light-dark(#1e8e3e, #24a446);
        --baseline-status-color-no_data: light-dark(#707070, #868686);
        --baseline-status-color-outline: light-dark(#d9d9d9, #d9d9d9);
        --baseline-status-color-link: light-dark(#1a73e8, #5aa1ff);

        color: inherit;
        display: block;
        border: solid 1px var(--baseline-status-color-outline);
        border-radius: 8px;
        padding: 16px 24px 0 24px;
        max-width: 800px;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-style: normal;
      }

      h1 {
        font-weight: normal;
        font-size: 20px;
        margin: 0;
      }

      a,
      a:active,
      a:visited {
        color: var(--baseline-status-color-link);
      }

      ::slotted(*) {
        color: grey;
        font-style: italic;
        font-size: 80%;
      }

      .baseline-status-title {
        gap: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 1;
      }

      .baseline-status-title {
        flex: 1;
      }

      .baseline-status-title div:first-child {
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }

      .baseline-badge {
        background: #3367d6;
        color: #fff;
        font-size: 11px;
        padding: 0 4px;
        border-radius: 2px;
        text-transform: uppercase;
        line-height: 20px;
        margin-inline: 0.5rem;
        white-space: nowrap;
      }

      .baseline-status-browsers {
        font-size: 0;
        max-width: 200px;
        display: flex;
        gap: 16px;
      }

      .baseline-status-browsers span {
        white-space: nowrap;
      }

      .support-no_data {
        color: var(--baseline-status-color-no_data);
      }

      .support-unavailable {
        color: var(--baseline-status-color-limited);
      }

      .support-newly {
        color: var(--baseline-status-color-newly);
      }

      .support-widely,
      .support-available {
        color: var(--baseline-status-color-widely);
      }

      details > summary .open-icon {
        width: 10px;
        height: 20px;
        margin-left: auto;
        color: inherit;
      }

      @media (min-width: 420px) {
        details > summary .open-icon {
          margin-left: 48px;
        }
      }

      details > summary .open-icon svg {
        transition: all 0.3s;
      }

      details[open] summary .open-icon svg {
        transform: rotate(180deg);
      }

      summary {
        display: flex;
        cursor: pointer;
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: space-between;
        padding: 16px 0;
      }

      summary::-webkit-details-marker {
        display: none;
      }
    `;

  constructor() {
    super();
    this.feature = {
      baseline: {
        status: "no_data",
      },
      name: this.featureId || "Unknown feature",
    };
  }

  /**
   * @returns {string | null}
   */
  get featureId() {
    return this.getAttribute("featureId");
  }

  connectedCallback() {
    super.connectedCallback();

    this.fetchData()
      .then((feature) => {
        this.feature = feature;
      })
      .finally(() => this.reRender());
  }

  /**
   * @returns {Promise<Feature>}
   */
  async fetchData() {
    const url = API_ENDPOINT + this.featureId;
    return fetch(url, { cache: "force-cache" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch feature ${this.featureId} (HTTP ${response.status})`,
          );
        }
        return response;
      })
      .then((response) => response.json());
  }

  /**
   * @param {Status} baseline
   * @param {BrowserImplementation} [browserImplementation]
   * @returns {string}
   */
  renderSupportIcon(baseline, browserImplementation) {
    const support =
      baseline === "limited"
        ? browserImplementation?.status || "unavailable"
        : baseline;
    const icon =
      support === "newly" || support === "widely" || support === "limited"
        ? "available"
        : support;
    return `<browser-support-icon class="support-${support}">
      ${SUPPORT_ICONS[icon]}
    </browser-support-icon>`;
  }

  /**
   * Returns feature's low_date as mm-yyyy string or empty string if low_date
   * is not present.
   * @param {Feature} feature
   * @returns {string}
   */
  getBaselineDate(feature) {
    return feature.baseline.low_date
      ? new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
        }).format(new Date(feature.baseline.low_date))
      : "";
  }

  /**
   * Returns Baseline's description.
   * @param {Status} baseline
   * @param {string} date
   * @returns {string}
   */
  getDescriptionDate(baseline, date) {
    if (baseline === "newly" && date) {
      return `Since ${date} this feature works across the latest
        devices and browser versions. This feature might not work in older
        devices or browsers.`;
    }
    if (baseline === "widely" && date) {
      return `This feature is well established and works across many
        devices and browser versions. It’s been available across browsers
        since ${date}`;
    }
    return BASELINE_DEFS[baseline].defaultDescription;
  }

  /**
   * @param {Feature} feature
   * @param {boolean } [isLoading]
   * @returns {string}
   */
  renderTemplate(feature, isLoading) {
    const baseline = feature.baseline.status || "no_data";

    const preTitle =
      baseline === "limited" || baseline === "no_data"
        ? ""
        : "<strong>Baseline</strong> ";

    const title = isLoading ? "Loading..." : BASELINE_DEFS[baseline].title;
    const badge =
      baseline === "newly"
        ? `<span class="baseline-badge">newly available</span>`
        : "";
    const baselineDate = this.getBaselineDate(feature);
    const description = this.getDescriptionDate(baseline, baselineDate);
    const year =
      baseline === "newly" && baselineDate ? baselineDate.split(" ")[1] : "";

    const { chrome, edge, firefox, safari } =
      feature.browser_implementations || {};

    /**
     * @param {string} title
     * @param {string} year
     * @param {string} badge
     * @param {string} chrome
     * @param {string} edge
     * @param {string} firefox
     * @param {string} safari
     * @returns {string}
     */
    const getAriaLabel = (
      title,
      year,
      badge,
      chrome = "no",
      edge = "no",
      firefox = "no",
      safari = "no",
    ) => {
      const unknown = title === "Unknown availability";
      const browsers = unknown
        ? {
            chrome: "unknown",
            edge: "unknown",
            firefox: "unknown",
            safari: "unknown",
          }
        : { chrome, edge, firefox, safari };
      return `Baseline: ${title}${year ? ` ${year}` : ""}${badge ? " (newly available)" : ""}. Supported in Chrome: ${browsers.chrome === "available" ? "yes" : browsers.chrome}. Supported in Edge: ${browsers.edge === "available" ? "yes" : browsers.edge}. Supported in Firefox: ${browsers.firefox === "available" ? "yes" : browsers.firefox}. Supported in Safari: ${browsers.safari === "available" ? "yes" : browsers.safari}.`;
    };

    return ` <h1>${feature.name}</h1>
      <details>
        <summary
          aria-label="${getAriaLabel(
            title,
            year,
            badge,
            chrome?.status,
            edge?.status,
            firefox?.status,
            safari?.status,
          )}"
        >
          <baseline-icon support="${baseline}" aria-hidden="true"></baseline-icon>
          <div class="baseline-status-title" aria-hidden="true">
            <div>${preTitle} ${title} ${year} ${badge}</div>
            <div class="baseline-status-browsers">
              <span>${ICONS.chrome} ${this.renderSupportIcon(baseline, chrome)}</span>
              <span>${ICONS.edge} ${this.renderSupportIcon(baseline, edge)}</span>
              <span>${ICONS.firefox} ${this.renderSupportIcon(baseline, firefox)}</span>
              <span>${ICONS.safari} ${this.renderSupportIcon(baseline, safari)}</span>
            </div>
          </div>
        </div>

        <span class="open-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
            <path d="M5.5 6.45356L0.25 1.20356L1.19063 0.262939L5.5 4.59419L9.80937 0.284814L10.75 1.22544L5.5 6.45356Z" fill="currentColor"/>
          </svg>
        </span>
      </summary>
      <p>
        ${description}
      </p>
      <p>
        ${baseline === "no_data" ? "" : `<a href="https://github.com/web-platform-dx/web-features/blob/main/features/${feature.feature_id || ""}.yml" target="_top">Learn more</a>`}
      </p>
    </details>`;
  }

  /**
   * @returns {string}
   */
  render() {
    return this.feature
      ? this.renderTemplate(this.feature)
      : this.renderTemplate(this.feature, true);
  }

  /**
   * @returns {void}
   */
  reRender() {
    this.shadow.innerHTML = this.render();
  }
}

export default BaselineStatus;
