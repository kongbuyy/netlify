exports.handler = async (event) => { 
const param=JSON.parse(event.body);
const apikey=process.env.SUPABASE_API_KEY;
const url=process.env.SUPABASE_DATABASE_FUNCTIONS_API;
const res = await fetch(url+param.txtName, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'apikey': apikey
  },
  body:param.data,
});
const data = await res.json();
return { statusCode: 200, headers: { "content-type": "application/json" }, body: JSON.stringify(data) };
};
