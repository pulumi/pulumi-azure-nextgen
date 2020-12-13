// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StreamAnalytics.V20160301
{
    public static class GetFunction
    {
        public static Task<GetFunctionResult> InvokeAsync(GetFunctionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetFunctionResult>("azure-nextgen:streamanalytics/v20160301:getFunction", args ?? new GetFunctionArgs(), options.WithVersion());
    }


    public sealed class GetFunctionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the function.
        /// </summary>
        [Input("functionName", required: true)]
        public string FunctionName { get; set; } = null!;

        /// <summary>
        /// The name of the streaming job.
        /// </summary>
        [Input("jobName", required: true)]
        public string JobName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetFunctionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetFunctionResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The properties that are associated with a function.
        /// </summary>
        public readonly Outputs.ScalarFunctionPropertiesResponse Properties;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetFunctionResult(
            string id,

            string? name,

            Outputs.ScalarFunctionPropertiesResponse properties,

            string type)
        {
            Id = id;
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}
