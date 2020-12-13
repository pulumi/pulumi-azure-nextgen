// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20190601
{
    public static class ListManagedClusterAccessProfile
    {
        public static Task<ListManagedClusterAccessProfileResult> InvokeAsync(ListManagedClusterAccessProfileArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListManagedClusterAccessProfileResult>("azure-nextgen:containerservice/v20190601:listManagedClusterAccessProfile", args ?? new ListManagedClusterAccessProfileArgs(), options.WithVersion());
    }


    public sealed class ListManagedClusterAccessProfileArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the managed cluster resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        /// <summary>
        /// The name of the role for managed cluster accessProfile resource.
        /// </summary>
        [Input("roleName", required: true)]
        public string RoleName { get; set; } = null!;

        public ListManagedClusterAccessProfileArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListManagedClusterAccessProfileResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Base64-encoded Kubernetes configuration file.
        /// </summary>
        public readonly string? KubeConfig;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListManagedClusterAccessProfileResult(
            string id,

            string? kubeConfig,

            string location,

            string name,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            KubeConfig = kubeConfig;
            Location = location;
            Name = name;
            Tags = tags;
            Type = type;
        }
    }
}
