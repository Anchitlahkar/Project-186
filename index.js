count = 1

AFRAME.registerComponent('rocket_fly', {
    schema: {

    },

    init: function () {
        window.addEventListener("keydown", (e) => {

            if (e) {
                el = document.getElementById(`rocket-${count}`)
                var position = el.getAttribute("position")

                if (position.y < 15) {
                    el.setAttribute("position",
                        {
                            x: position.x,
                            y: position.y + 0.5,
                            z: position.z
                        }
                    )

                }

                else {
                    entity = el

                    var rocket = document.querySelector("#rocket");
                    rocket.removeChild(entity);

                    var fireWork = document.querySelector(`#particle-${count}`)

                    fireWork.setAttribute("position", { x: position.x, y: position.y - 5, z: position.z })
                    fireWork.setAttribute("visible", true)
                    fireWork.setAttribute("spe-particles", { duration: 1 })

                    if (count < 6) {
                        count += 1

                        console.log(count)
                    }
                    if (count === 6) {
                        text1 = document.querySelector("#text-1")
                        text1.setAttribute("visible",false)
                        
                        text2 = document.querySelector("#text-2")
                        text2.setAttribute("visible",true)
                    }
                }

            }
        },
            window.addEventListener("keypress", (e) => {
                if (count === 6) {
                    if (e.key === 'r') {
                        location.reload()
                    }
                }
            })
        )
    }
});
