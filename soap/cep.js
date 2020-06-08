const soapRequest = require('easy-soap-request');
const converter = require('xml-js');
const cheerio = require('cheerio');

// example data
const wsdlLocation = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

const xmlEnvelop = `
  <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
      <consultaCEP xmlns="http://cliente.bean.master.sigep.bsb.correios.com.br/">
        <cep xmlns="">37540000</cep>
      </consultaCEP>
    </Body>
  </Envelope>
`;

const headersValues = {
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': '',
};

// usage of module
(async () => {
  const { response } = await soapRequest({
    url: wsdlLocation,
    headers: headersValues,
    xml: xmlEnvelop
  });

  const { headers, body, statusCode } = response;
  const $ = cheerio.load(body);

  const data = converter.xml2js(
    `<result>${$('return').html()}</result>`,
    { compact: true }
  );

  // console.log(headers);
  // console.log(statusCode);
  console.log(data.result.cidade._text, data.result.uf._text);
  // console.log(JSON.stringify(data, null, 2));
})();
