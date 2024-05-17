const UI = {
    init : function () {
        this.popup.init()
        this.toggle.init()
    },
    // 공통 함수
    activateFunc : function ( elem , className ){
        elem.classList.add(className)
    },
    inActivateFunc : function ( elem, className ) {
        elem.classList.remove(className)
    },
    toggleFunc : function ( elem , className ) {
        elem.classList.toggle(className)
    },
    // 개별 컴퍼넌트
    popup : {
        items : document.querySelectorAll("[data-popup]"),
        itemArray : [],
        init : function () {
            this.items.length > 0 ?
                this.dataCollection()
                : console.log("Popup fail")
        },
        dataCollection : function () {
            const _this = this;
            this.items.forEach((item) => {
                if(_this.itemArray.indexOf(item.dataset.popup) === -1 ) {
                    _this.itemArray.push(item.dataset.popup)
                }
            })

            if(this.itemArray.length > 0){
                this.events()
            } else {
                return
            }
        },
        events: function () {
            this.itemArray.forEach((dataName) => {
                const popup = document.querySelector(`[data-popup=${dataName}]`)
                const open = document.querySelector(`[data-popup-open=${dataName}]`)
                const closeGroup = document.querySelectorAll(`[data-popup-close=${dataName}]`)

                open.addEventListener("click",() => UI.activateFunc(popup, "is-show"))

                closeGroup.forEach((closeBtn)=> {
                    closeBtn.addEventListener("click",() => UI.inActivateFunc(popup, "is-show"))
                })

            })
        }
    },
    toggle : {
        items : document.querySelectorAll("[data-toggle]"),
        itemArray : [],
        init : function () {
            this.items.length > 0 ?
                this.dataCollection()
                : console.log("Toggle fail")
        },
        dataCollection : function () {
            const _this = this;
            this.items.forEach((item) => {
                if(_this.itemArray.indexOf(item.dataset.toggle) === -1 ) {
                    _this.itemArray.push(item.dataset.toggle)
                }
            })

            if(this.itemArray.length > 0){
                this.events()
            } else {
                return
            }
        },
        events: function () {
            this.itemArray.forEach((dataName) => {
                const toggleOpen = document.querySelector(`[data-toggle=${dataName}]`)
                const panel = document.querySelector(`[data-toggle-panel=${dataName}]`)

                toggleOpen.addEventListener("click",() => UI.toggleFunc(panel, "is-show"))
            })

        }
    }
}

UI.init()