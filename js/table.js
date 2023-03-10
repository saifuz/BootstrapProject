// $(function () {
//     $('#convert_btn').click(function () {
//         var data = {}  // object to hold the user input data
//         // store user data in a data["robots_data"]
//         if ($('#yaml_switch').prop("checked")) {
//             data["robots_data"] = $('#in_form').val()  // in case of YAML data - store it as a string
//         } else {
//             data["robots_data"] = JSON.parse($('#in_form').val())  // in case of JSON data - store it as an object
//         }

//         // todo: add root input element
//         // data["root"] = "POST"
//         console.log(data)
//         var body = JSON.stringify(data)
//         $.ajax({
//             url: "https://60c8ed887dafc90017ffbd56.mockapi.io/robots",
//             contentType: "application/json",
//             data: body,
//             dataType: "json",
//             type: 'POST',
//             success: function (response) {
//                 $('#out_form').val(response.data)
//             }
//         });
//     });
// });

// const URL = 'https://60c8ed887dafc90017ffbd56.mockapi.io/robots';

// async function getRobotObjects() {
//     const result = await fetch(URL);
//     result.json().then(data => {
//         // console.log(data.robotId, data.batteryLevel);
//         for (const value of data.values()) {
//             console.log(value.robotId, value.batteryLevel);
//         }
//         // console.log(data);
//     })
// }

// getRobotObjects();

fetch("https://60c8ed887dafc90017ffbd56.mockapi.io/robots").then(
    res => {
        res.json().then(data => {
            console.log(data.length);
            if (data.length > 0) {

                var temp = "";
                data.forEach((itemData) => {
                    temp += "<tr>";
                    temp += "<td>" + itemData.robotId + "</td>";
                    temp += "<td>" + itemData.batteryLevel + "</td>";
                    temp += "<td>" + itemData.y + "</td>";
                    temp += "<td>" + itemData.y + "</td></tr>";
                });
                document.getElementById('data').innerHTML = temp;
            }
        }
        )
    }
)

