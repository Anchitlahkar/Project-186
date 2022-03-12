var count = 1
var color = ["#FF0000", "#0000FF", "#006400", "#FF6600", "#FFFFFF", "#000000", "#FFFF00", "#A020F0", "#C0C0C0", "#964B00", "#808080",
    "#FFC0CB", "#808000", "#800000", "#8F00FF", "#36454F", "#FF00FF", "#CD7F32", "#FFFDD0", "#FFD700", "#008080", "#FFDB58", "#000080",
    "#FF7F50", "#800020", "#E6E6FA", "#E0b0FF", "#FFE5B4", "#B7410E", "#4B0082", "#E0115F", "#CC7357", "#00FFFF", "#007FFF", "#F5F5DC",
    "#FAF9F6", "#30D5C8", "#FFBF00", "#3EB489"]

height = [8, 6, 4, 2, 4, 6, 8]

AFRAME.registerComponent('rocket_fly', {
    schema: {

    },

    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e) {
                this.fire(e)
            }
        }),

            window.addEventListener("click", (e) => {
                if (e) {
                    this.fire(e)
                }
            }),

            window.addEventListener("keypress", (e) => {
                if (count === 8) {
                    if (e.key === 'r') {
                        location.reload()
                    }
                }
            })

    },

    fire: function (e) {

        el = document.getElementById(`rocket-${count}`)
        var position = el.getAttribute("position")

        if (position.y < 15) {
            el.setAttribute("position",
                {
                    x: position.x,
                    y: position.y + 0.25,
                    z: position.z
                }
            )

        }

        else {
            entity = el

            var rocket = document.querySelector("#rocket");
            rocket.removeChild(entity);

            var fireWork = document.querySelector(`#particle-${count}`)

            fireWork.setAttribute("position", { x: position.x, y: position.y - height[count - 1], z: position.z })
            fireWork.setAttribute("visible", true)
            fireWork.setAttribute("spe-particles",
                {
                    duration: 10,
                    color: this.colorSelector()
                }
            )

            if (count < 8) {
                count += 1

                console.log(count)
            }
            if (count === 8) {
                text1 = document.querySelector("#text-1")
                text1.setAttribute("visible", false)

                text2 = document.querySelector("#text-2")
                text2.setAttribute("visible", true)
            }
        }


    },

    colorSelector: function () {

        var colorList = []

        for (var i = 0; i < 12; i++) {
            var colorNum = Math.floor(Math.random() * color.length)
            console.log(colorNum)
            colorList.push(color[colorNum])

        }

        return colorList
    },


});
