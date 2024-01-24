module.exports.handler = async (event) => {

  console.log(event);

  const { name } = event;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `hello ${name}!`
      },
      null,
      2
    ),
  };
};
