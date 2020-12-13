// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DeploymentManager.V20191101Preview
{
    public static class GetStep
    {
        public static Task<GetStepResult> InvokeAsync(GetStepArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetStepResult>("azure-nextgen:deploymentmanager/v20191101preview:getStep", args ?? new GetStepArgs(), options.WithVersion());
    }


    public sealed class GetStepArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the deployment step.
        /// </summary>
        [Input("stepName", required: true)]
        public string StepName { get; set; } = null!;

        public GetStepArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetStepResult
    {
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The properties that define the step.
        /// </summary>
        public readonly Union<Outputs.HealthCheckStepPropertiesResponse, Outputs.WaitStepPropertiesResponse> Properties;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetStepResult(
            string id,

            string location,

            string name,

            Union<Outputs.HealthCheckStepPropertiesResponse, Outputs.WaitStepPropertiesResponse> properties,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Tags = tags;
            Type = type;
        }
    }
}
