export default async (method) => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            if (method.payload == undefined) {
                return resolve(await getApiCall(method.type));
            } else {
                return resolve(await getPostApiCall(method));
            }
        }, 100);
    })
}


export async function getApiCall(url) {
    console.log('url :::: ', url)
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
        let responseJson = await response.json();
        //console.log('response :::: ', responseJson)
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}


async function getPostApiCall(method) {
    console.log(" Api Type : ", method.type + '   requestData :::: ', JSON.stringify(method.payload));
    let formData = new FormData();
    try {
        for (const [key, value] of Object.entries(method.payload)) {
            formData.append(`${key}`, value);
        }
        let response = await fetch(method.type, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        let responseJson = await response.json();
        // console.log('response>>>>>>>>>>', responseJson)
        return responseJson;
    } catch (error) {
        console.warn(error)
        alert(error.message, "danger");
    }
}