// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MachineLearningServices.V20200218Preview
{
    public static class GetWorkspace
    {
        public static Task<GetWorkspaceResult> InvokeAsync(GetWorkspaceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWorkspaceResult>("azure-nextgen:machinelearningservices/v20200218preview:getWorkspace", args ?? new GetWorkspaceArgs(), options.WithVersion());
    }


    public sealed class GetWorkspaceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the resource group in which workspace is located.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of Azure Machine Learning workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetWorkspaceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWorkspaceResult
    {
        /// <summary>
        /// ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
        /// </summary>
        public readonly string? ApplicationInsights;
        /// <summary>
        /// ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
        /// </summary>
        public readonly string? ContainerRegistry;
        /// <summary>
        /// The creation time of the machine learning workspace in ISO8601 format.
        /// </summary>
        public readonly string CreationTime;
        /// <summary>
        /// The description of this workspace.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Url for the discovery service to identify regional endpoints for machine learning experimentation services
        /// </summary>
        public readonly string? DiscoveryUrl;
        /// <summary>
        /// The encryption settings of Azure ML workspace.
        /// </summary>
        public readonly Outputs.EncryptionPropertyResponse? Encryption;
        /// <summary>
        /// The friendly name for this workspace. This name in mutable
        /// </summary>
        public readonly string? FriendlyName;
        /// <summary>
        /// The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
        /// </summary>
        public readonly bool? HbiWorkspace;
        /// <summary>
        /// Specifies the resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The identity of the resource.
        /// </summary>
        public readonly Outputs.IdentityResponse? Identity;
        /// <summary>
        /// ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
        /// </summary>
        public readonly string? KeyVault;
        /// <summary>
        /// Specifies the location of the resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Specifies the name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
        /// </summary>
        public readonly string ServiceProvisionedResourceGroup;
        /// <summary>
        /// The sku of the workspace.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
        /// </summary>
        public readonly string? StorageAccount;
        /// <summary>
        /// Contains resource tags defined as key/value pairs.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Specifies the type of the resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The immutable id associated with this workspace.
        /// </summary>
        public readonly string WorkspaceId;

        [OutputConstructor]
        private GetWorkspaceResult(
            string? applicationInsights,

            string? containerRegistry,

            string creationTime,

            string? description,

            string? discoveryUrl,

            Outputs.EncryptionPropertyResponse? encryption,

            string? friendlyName,

            bool? hbiWorkspace,

            string id,

            Outputs.IdentityResponse? identity,

            string? keyVault,

            string? location,

            string name,

            string provisioningState,

            string serviceProvisionedResourceGroup,

            Outputs.SkuResponse? sku,

            string? storageAccount,

            ImmutableDictionary<string, string>? tags,

            string type,

            string workspaceId)
        {
            ApplicationInsights = applicationInsights;
            ContainerRegistry = containerRegistry;
            CreationTime = creationTime;
            Description = description;
            DiscoveryUrl = discoveryUrl;
            Encryption = encryption;
            FriendlyName = friendlyName;
            HbiWorkspace = hbiWorkspace;
            Id = id;
            Identity = identity;
            KeyVault = keyVault;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            ServiceProvisionedResourceGroup = serviceProvisionedResourceGroup;
            Sku = sku;
            StorageAccount = storageAccount;
            Tags = tags;
            Type = type;
            WorkspaceId = workspaceId;
        }
    }
}
