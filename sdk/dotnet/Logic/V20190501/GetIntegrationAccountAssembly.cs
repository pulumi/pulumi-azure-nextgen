// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20190501
{
    public static class GetIntegrationAccountAssembly
    {
        public static Task<GetIntegrationAccountAssemblyResult> InvokeAsync(GetIntegrationAccountAssemblyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetIntegrationAccountAssemblyResult>("azure-nextgen:logic/v20190501:getIntegrationAccountAssembly", args ?? new GetIntegrationAccountAssemblyArgs(), options.WithVersion());
    }


    public sealed class GetIntegrationAccountAssemblyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The assembly artifact name.
        /// </summary>
        [Input("assemblyArtifactName", required: true)]
        public string AssemblyArtifactName { get; set; } = null!;

        /// <summary>
        /// The integration account name.
        /// </summary>
        [Input("integrationAccountName", required: true)]
        public string IntegrationAccountName { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetIntegrationAccountAssemblyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetIntegrationAccountAssemblyResult
    {
        /// <summary>
        /// The resource id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Gets the resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The assembly properties.
        /// </summary>
        public readonly Outputs.AssemblyPropertiesResponse Properties;
        /// <summary>
        /// The resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Gets the resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetIntegrationAccountAssemblyResult(
            string id,

            string? location,

            string name,

            Outputs.AssemblyPropertiesResponse properties,

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
