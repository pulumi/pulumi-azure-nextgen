// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.V20201120
{
    public static class GetProviderRegistration
    {
        public static Task<GetProviderRegistrationResult> InvokeAsync(GetProviderRegistrationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetProviderRegistrationResult>("azure-nextgen:providerhub/v20201120:getProviderRegistration", args ?? new GetProviderRegistrationArgs(), options.WithVersion());
    }


    public sealed class GetProviderRegistrationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource provider hosted within ProviderHub.
        /// </summary>
        [Input("providerNamespace", required: true)]
        public string ProviderNamespace { get; set; } = null!;

        public GetProviderRegistrationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetProviderRegistrationResult
    {
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        public readonly Outputs.ProviderRegistrationResponseProperties Properties;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetProviderRegistrationResult(
            string id,

            string name,

            Outputs.ProviderRegistrationResponseProperties properties,

            string type)
        {
            Id = id;
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}
