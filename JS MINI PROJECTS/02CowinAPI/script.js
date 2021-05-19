const today = new Date();
const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=391&date=${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
const list = document.querySelector('tbody');



async function fetchData() {
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
}

const googleMap = ['https://www.google.co.in/maps/place/Maveshi,+Maharashtra+422604/@19.4940865,73.8361709,14z/data=!4m5!3m4!1s0x3bdd0cabed44ab41:0x570ac8212e25c408!8m2!3d19.4949751!4d73.8448469', 'https://www.google.co.in/maps/place/Primary+Health+Centre/@19.6831166,74.6536821,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdc61c71e8ad533:0xb6149230bbf3df5c!8m2!3d19.6831116!4d74.6558708', 'https://www.google.co.in/maps/search/DEHARE+PHC+Dehare,+Ahmednagar,+Maharashtra,+414111/@19.2417305,74.6691584,16z/data=!3m1!4b1', 'https://www.google.co.in/maps/search/TOPKHANA+HP+At+Post+-Topkhana+District+Ahmednagar,+Ahmednagar,+Maharashtra,+414004/@19.1104714,74.6726326,12z/data=!3m1!4b1', 'https://www.google.co.in/maps/search/TV+CENTER+NEAR+AKASHWANI+KENDRA+SAVEDI,+Ahmednagar,+Maharashtra,+414001/@19.102156,74.7262297,14z', 'https://www.google.co.in/maps/search/RAHURI+RH+2+RAHURI+RH,+Ahmednagar,+Maharashtra,+413705/@19.3986204,74.6357547,15z/data=!3m1!4b1', 'https://www.google.co.in/maps/place/Sai+seva+clinical+laboratory+wari+tq-kopargaon,dist-ahamednagar/@19.8148043,74.5667262,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdc5d1525c409e9:0x94ecbf1347eeca8!8m2!3d19.8147993!4d74.5689149', 'https://www.google.co.in/maps/search/TAKLIBHAN+PHC+Taklibhan,+Ahmednagar,+Maharashtra,+413725/@19.6099869,74.7944927,16z/data=!3m1!4b1', 'https://www.google.co.in/maps/place/Garud+Cancer+Hospital/@19.1111506,74.7286257,15.75z/data=!4m9!1m2!2m1!1sGARUD+HOSPITAL+CANCER+CENTRE+PAID+NAGAR-MANMAD+Highway+SAVADI+ROAD,+Ahmednagar,+Maharashtra,+414003!3m5!1s0x3bdcb081d27f327f:0x843c0516c49738fc!8m2!3d19.1123227!4d74.7305879!15sCmNHQVJVRCBIT1NQSVRBTCBDQU5DRVIgQ0VOVFJFIFBBSUQgTkFHQVItTUFOTUFEIEhpZ2h3YXkgU0FWQURJIFJPQUQsIEFobWVkbmFnYXIsIE1haGFyYXNodHJhLCA0MTQwMDOSARdjYW5jZXJfdHJlYXRtZW50X2NlbnRlcg', 'https://www.google.co.in/maps/search/LONI+RH+2+LONI+RH,+Ahmednagar,+Maharashtra,+413204/@19.577787,74.4568031,16z/data=!3m1!4b1', 'https://www.google.co.in/maps/search/KOHANE+PHC+Kohane,+Ahmednagar,+Maharashtra,+422610/@19.4122197,73.8523903,14z/data=!3m1!4b1', 'https://www.google.co.in/maps/search/MANIKDAUNDI+PHC+Manikdaundi,+Ahmednagar,+Maharashtra,+414102/@19.122068,75.0762736,12z/data=!3m1!4b1', 'https://www.google.co.in/maps/search/CIVIL+HOSPITAL(COVAXIN)+Civil+Hospital+Ahmednagar,+Ahmednagar,+Maharashtra,+414001/@19.101783,74.7338399,15z/data=!3m1!4b1', 'https://www.google.co.in/maps/place/Balasaheb+Deshpande+Hospital/@19.0922004,74.7362361,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdcb060f70fa58d:0x3f8baf0d4f31929c!8m2!3d19.0921953!4d74.7384248', 'https://www.google.co.in/maps/search/SHENDI+PHC+Shendi,+Ahmednagar,+Maharashtra,+422604/@19.54439,73.7563153,15z/data=!3m1!4b1', 'https://www.google.co.in/maps/search/MAHATMAPHULE+UHC(18+TO45+YEAR)+Near+Zilla+Parishad+Ahmednagar,+Ahmednagar,+Maharashtra,+414001/@19.0863251,74.7329192,17z/data=!3m1!4b1', 'https://www.google.co.in/maps/place/Rural+Hospital,+Sangamner,+Ahmednagar/@19.6034066,74.190583,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdd006b6971640f:0x657de7d4f8b42155!8m2!3d19.6034016!4d74.1927717', 'https://www.google.co.in/maps/search/SANVATSAR+PHC+Sanvatsar,+Ahmednagar,+Maharashtra,+423601/@19.8043146,74.6607704,9z', 'https://www.google.co.in/maps/place/Military+Hospital+Ahmednagar/@19.0795039,74.7914712,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdcaf4117bc31c1:0xe2aeb06fd1afaa82!8m2!3d19.0794988!4d74.7936743', 'https://www.google.co.in/maps/search/RAHURI+RH+2+RAHURI+RH,+Ahmednagar,+Maharashtra,+413705/@19.3986204,74.6357547,15z/data=!3m1!4b1'];






let arr = [];
fetchData().then((data) => {
        let num = 1;
        str = '';
        for (key1 in data) {
                const values = data[key1];
                // console.log(values);
                values.forEach(element => {

                        const dosage = element.sessions;

                        for (key in dosage) {
                        }


                        let dose;
                        if (dosage[key].available_capacity > 1) {
                                dose = `${dosage[key].available_capacity}
                                <a href="https://www.cowin.gov.in/home">Get Vaccine</a>`
                        } else {
                                dose = `${dosage[key].available_capacity}`
                        }

                        str += `
                                <tr>
                                <th scope="row">${num++}</th>
                                <td>${element.name}</td>
                                <td>${element.address}</td>
                                <td>${element.pincode}</td>
                                <td>${dose}</td>
                                </tr>`


                });

                list.innerHTML = str;
        }



})

console.log('page Refereshed');

