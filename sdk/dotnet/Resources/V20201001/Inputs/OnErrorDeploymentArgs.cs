// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Resources.V20201001.Inputs
{

    /// <summary>
    /// Deployment on error behavior.
    /// </summary>
    public sealed class OnErrorDeploymentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The deployment to be used on error case.
        /// </summary>
        [Input("deploymentName")]
        public Input<string>? DeploymentName { get; set; }

        /// <summary>
        /// The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.
        /// </summary>
        [Input("type")]
        public Input<Pulumi.AzureNextGen.Resources.V20201001.OnErrorDeploymentType>? Type { get; set; }

        public OnErrorDeploymentArgs()
        {
        }
    }
}
