// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20170701Preview
{
    public static class GetApplicationTypeVersion
    {
        public static Task<GetApplicationTypeVersionResult> InvokeAsync(GetApplicationTypeVersionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApplicationTypeVersionResult>("azure-nextgen:servicefabric/v20170701preview:getApplicationTypeVersion", args ?? new GetApplicationTypeVersionArgs(), options.WithVersion());
    }


    public sealed class GetApplicationTypeVersionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the application type name resource.
        /// </summary>
        [Input("applicationTypeName", required: true)]
        public string ApplicationTypeName { get; set; } = null!;

        /// <summary>
        /// The name of the cluster resource.
        /// </summary>
        [Input("clusterName", required: true)]
        public string ClusterName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The application type version.
        /// </summary>
        [Input("version", required: true)]
        public string Version { get; set; } = null!;

        public GetApplicationTypeVersionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApplicationTypeVersionResult
    {
        /// <summary>
        /// The URL to the application package
        /// </summary>
        public readonly string AppPackageUrl;
        /// <summary>
        /// List of application type parameters that can be overridden when creating or updating the application.
        /// </summary>
        public readonly ImmutableDictionary<string, string> DefaultParameterList;
        /// <summary>
        /// Azure resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Azure resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Azure resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The current deployment or provisioning state, which only appears in the response
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Azure resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetApplicationTypeVersionResult(
            string appPackageUrl,

            ImmutableDictionary<string, string> defaultParameterList,

            string id,

            string? location,

            string name,

            string provisioningState,

            string type)
        {
            AppPackageUrl = appPackageUrl;
            DefaultParameterList = defaultParameterList;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
