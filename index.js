const fs = require('fs');
const {Octokit} = require('octokit')
const sarif = fs.readFileSync('fake.sarif.gz');

const init = async()=>{
    const octokit = new Octokit({
        auth: process.argv[2]
    });
    //try #1, upload sarif via external endpoint
    console.log(await octokit.request('POST /repos/nickcopi/codeqlPRpermtests/code-scanning/sarifs',{
        commit_sha:'e8c3993956dcd1a50d5eddd1dce59a7c67fa78fd',
        ref: 'refs/heads/main',
        sarif:sarif.toString('base64')
    }).catch(e=>console.log(e)));
    /*await octokit.request('PUT /repos/nickcopi/codeqlPRpermtests/code-scanning/analysis',{

    });*/

}
init();