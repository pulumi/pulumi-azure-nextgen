// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview
{
    public static class GetFactory
    {
        public static Task<GetFactoryResult> InvokeAsync(GetFactoryArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetFactoryResult>("azure-nextgen:datafactory/v20170901preview:getFactory", args ?? new GetFactoryArgs(), options.WithVersion());
    }


    public sealed class GetFactoryArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The factory name.
        /// </summary>
        [Input("factoryName", required: true)]
        public string FactoryName { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetFactoryArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetFactoryResult
    {
        /// <summary>
        /// Time the factory was created in ISO8601 format.
        /// </summary>
        public readonly string CreateTime;
        /// <summary>
        /// The resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Managed service identity of the factory.
        /// </summary>
        public readonly Outputs.FactoryIdentityResponse? Identity;
        /// <summary>
        /// The resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Factory provisioning state, example Succeeded.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Version of the factory.
        /// </summary>
        public readonly string Version;
        /// <summary>
        /// VSTS repo information of the factory.
        /// </summary>
        public readonly Outputs.FactoryVSTSConfigurationResponse? VstsConfiguration;

        [OutputConstructor]
        private GetFactoryResult(
            string createTime,

            string id,

            Outputs.FactoryIdentityResponse? identity,

            string? location,

            string name,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string type,

            string version,

            Outputs.FactoryVSTSConfigurationResponse? vstsConfiguration)
        {
            CreateTime = createTime;
            Id = id;
            Identity = identity;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
            Version = version;
            VstsConfiguration = vstsConfiguration;
        }
    }
}
