const fs = require('fs');
const {Octokit} = require('octokit')
const sarif = fs.readFileSync('fake.sarif.gz');

const init = async()=>{
    const octokit = new Octokit({
        auth: process.argv[2]
    });
    //try #1, upload sarif via external endpoint -- token not scoped for this
    /*console.log(await octokit.request('POST /repos/nickcopi/codeqlPRpermtests/code-scanning/sarifs',{
        commit_sha:'e8c3993956dcd1a50d5eddd1dce59a7c67fa78fd',
        ref: 'refs/heads/main',
        sarif:sarif.toString('base64')
    }).catch(e=>console.log(e)));*/
    //try #2, rev eng what the official action does for sarif upload and try to do that off ref
    console.log(await octokit.request('PUT /repos/nickcopi/codeqlPRpermtests/code-scanning/analysis',{
        data:{
            sarif:sarif.toString('base64'),
            ref: 'refs/pull/2/merge',
            commit_oid:"c451ce227bba6760132f445fe5e0f02b3527f296",
            analysis_key: '.github/workflows/codeql.yml:analyze'
        }
    }).catch(e=>console.log(e)));

}
init();