// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.V20201120
{
    public static class GetResourceTypeRegistration
    {
        public static Task<GetResourceTypeRegistrationResult> InvokeAsync(GetResourceTypeRegistrationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetResourceTypeRegistrationResult>("azure-nextgen:providerhub/v20201120:getResourceTypeRegistration", args ?? new GetResourceTypeRegistrationArgs(), options.WithVersion());
    }


    public sealed class GetResourceTypeRegistrationArgs : Pulumi.InvokeArgs
    {
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

        public GetResourceTypeRegistrationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetResourceTypeRegistrationResult
    {
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        public readonly Outputs.ResourceTypeRegistrationResponseProperties Properties;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetResourceTypeRegistrationResult(
            string name,

            Outputs.ResourceTypeRegistrationResponseProperties properties,

            string type)
        {
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}
