const accessToken = 'hf_...'
const inference = new HfInference(accessToken)
const userIn = ''

const meta = inference.endpoint('https://xyz.eu-west-1.aws.endpoints.huggingface.cloud/gpt2-endpoint')
const { generated_text } = await meta.textGeneration({ inputs: userIn })

//import requests
//
// API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B"
// headers = {"Authorization": "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
//
// def query(payload):
// 	response = requests.post(API_URL, headers=headers, json=payload)
// 	return response.json()
//
// output = query({
// 	"inputs": "Can you please let us know more details about your ",
// })

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B",
		{
			headers: { Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
    alert(result);
	return result;
}

// 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

query({"inputs": "Can you please let us know more details about your "}).then((response) => {
	console.log(JSON.stringify(response));
});
