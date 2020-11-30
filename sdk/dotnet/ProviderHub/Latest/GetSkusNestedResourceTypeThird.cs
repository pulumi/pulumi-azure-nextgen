// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.Latest
{
    public static class GetSkusNestedResourceTypeThird
    {
        public static Task<GetSkusNestedResourceTypeThirdResult> InvokeAsync(GetSkusNestedResourceTypeThirdArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSkusNestedResourceTypeThirdResult>("azure-nextgen:providerhub/latest:getSkusNestedResourceTypeThird", args ?? new GetSkusNestedResourceTypeThirdArgs(), options.WithVersion());
    }


    public sealed class GetSkusNestedResourceTypeThirdArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The first child resource type.
        /// </summary>
        [Input("nestedResourceTypeFirst", required: true)]
        public string NestedResourceTypeFirst { get; set; } = null!;

        /// <summary>
        /// The second child resource type.
        /// </summary>
        [Input("nestedResourceTypeSecond", required: true)]
        public string NestedResourceTypeSecond { get; set; } = null!;

        /// <summary>
        /// The third child resource type.
        /// </summary>
        [Input("nestedResourceTypeThird", required: true)]
        public string NestedResourceTypeThird { get; set; } = null!;

        /// <summary>
        /// The name of the resource provider hosted within ProviderHub.
        /// </summary>
        [Input("providerNamespace", required: true)]
        public string ProviderNamespace { get; set; } = null!;

        /// <summary>
        /// The resource type.
        /// </summary>
        [Input("resourceType", required: true)]
        public string ResourceType { get; set; } = null!;

        /// <summary>
        /// The SKU.
        /// </summary>
        [Input("sku", required: true)]
        public string Sku { get; set; } = null!;

        public GetSkusNestedResourceTypeThirdArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSkusNestedResourceTypeThirdResult
    {
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        public readonly Outputs.SkuResourceResponseProperties Properties;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetSkusNestedResourceTypeThirdResult(
            string name,

            Outputs.SkuResourceResponseProperties properties,

            string type)
        {
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}
