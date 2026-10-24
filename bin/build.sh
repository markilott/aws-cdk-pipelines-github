#!/bin/bash
# The Lambda function is now bundled automatically via esbuild as part of
# `cdk synth` (NodejsFunction), so there is no longer a separate install step
# required here. Kept as a no-op so the "npm run build" step in the pipeline
# and README still works unchanged.
echo "Nothing to build - the Lambda function is bundled automatically during cdk synth"
