// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DeploymentManager.V20191101Preview.Outputs
{

    [OutputType]
    public sealed class SasAuthenticationResponse
    {
        /// <summary>
        /// The SAS URI to the Azure Storage blob container. Any offset from the root of the container to where the artifacts are located can be defined in the artifactRoot.
        /// </summary>
        public readonly string SasUri;
        /// <summary>
        /// The authentication type
        /// Expected value is 'Sas'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private SasAuthenticationResponse(
            string sasUri,

            string type)
        {
            SasUri = sasUri;
            Type = type;
        }
    }
}
