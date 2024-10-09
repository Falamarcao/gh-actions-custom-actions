const core = require('@actions/core')
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    // 1) Get some input values
    const bucket = core.getInput('bucket', { required: true });
    const region = core.getInput('region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload files
    const s3Uri = `s3://${bucket}`

    core.notice(
      `Executing AWS S3 sync for bucket ${bucket} and region ${region}`
    );

    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${region}`)

    const websiteURL = `http://${bucket}.s3-website-${region}.amazonaws.com`;
    core.setOutput('website-url', websiteURL);

 }

run();