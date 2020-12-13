// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Resources.V20160901
{
    public static class GetDeployment
    {
        public static Task<GetDeploymentResult> InvokeAsync(GetDeploymentArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDeploymentResult>("azure-nextgen:resources/v20160901:getDeployment", args ?? new GetDeploymentArgs(), options.WithVersion());
    }


    public sealed class GetDeploymentArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the deployment to get.
        /// </summary>
        [Input("deploymentName", required: true)]
        public string DeploymentName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDeploymentArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDeploymentResult
    {
        /// <summary>
        /// The ID of the deployment.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the deployment.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Deployment properties.
        /// </summary>
        public readonly Outputs.DeploymentPropertiesExtendedResponse Properties;

        [OutputConstructor]
        private GetDeploymentResult(
            string id,

            string name,

            Outputs.DeploymentPropertiesExtendedResponse properties)
        {
            Id = id;
            Name = name;
            Properties = properties;
        }
    }
}
