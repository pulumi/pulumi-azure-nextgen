// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Solutions.V20200821Preview
{
    public static class GetApplicationDefinition
    {
        public static Task<GetApplicationDefinitionResult> InvokeAsync(GetApplicationDefinitionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApplicationDefinitionResult>("azure-nextgen:solutions/v20200821preview:getApplicationDefinition", args ?? new GetApplicationDefinitionArgs(), options.WithVersion());
    }


    public sealed class GetApplicationDefinitionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the managed application definition.
        /// </summary>
        [Input("applicationDefinitionName", required: true)]
        public string ApplicationDefinitionName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetApplicationDefinitionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApplicationDefinitionResult
    {
        /// <summary>
        /// The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationDefinitionArtifactResponse> Artifacts;
        /// <summary>
        /// The managed application provider authorizations.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationAuthorizationResponse> Authorizations;
        /// <summary>
        /// The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
        /// </summary>
        public readonly object? CreateUiDefinition;
        /// <summary>
        /// The managed application deployment policy.
        /// </summary>
        public readonly Outputs.ApplicationDeploymentPolicyResponse? DeploymentPolicy;
        /// <summary>
        /// The managed application definition description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The managed application definition display name.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// Resource ID
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// A value indicating whether the package is enabled or not.
        /// </summary>
        public readonly bool? IsEnabled;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The managed application lock level.
        /// </summary>
        public readonly string LockLevel;
        /// <summary>
        /// The managed application locking policy.
        /// </summary>
        public readonly Outputs.ApplicationPackageLockingPolicyDefinitionResponse? LockingPolicy;
        /// <summary>
        /// The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
        /// </summary>
        public readonly object? MainTemplate;
        /// <summary>
        /// ID of the resource that manages this resource.
        /// </summary>
        public readonly string? ManagedBy;
        /// <summary>
        /// The managed application management policy that determines publisher's access to the managed resource group.
        /// </summary>
        public readonly Outputs.ApplicationManagementPolicyResponse? ManagementPolicy;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The managed application notification policy.
        /// </summary>
        public readonly Outputs.ApplicationNotificationPolicyResponse? NotificationPolicy;
        /// <summary>
        /// The managed application definition package file Uri. Use this element
        /// </summary>
        public readonly string? PackageFileUri;
        /// <summary>
        /// The managed application provider policies.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationPolicyResponse> Policies;
        /// <summary>
        /// The SKU of the resource.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// The storage account id for bring your own storage scenario.
        /// </summary>
        public readonly string? StorageAccountId;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetApplicationDefinitionResult(
            ImmutableArray<Outputs.ApplicationDefinitionArtifactResponse> artifacts,

            ImmutableArray<Outputs.ApplicationAuthorizationResponse> authorizations,

            object? createUiDefinition,

            Outputs.ApplicationDeploymentPolicyResponse? deploymentPolicy,

            string? description,

            string? displayName,

            string id,

            bool? isEnabled,

            string? location,

            string lockLevel,

            Outputs.ApplicationPackageLockingPolicyDefinitionResponse? lockingPolicy,

            object? mainTemplate,

            string? managedBy,

            Outputs.ApplicationManagementPolicyResponse? managementPolicy,

            string name,

            Outputs.ApplicationNotificationPolicyResponse? notificationPolicy,

            string? packageFileUri,

            ImmutableArray<Outputs.ApplicationPolicyResponse> policies,

            Outputs.SkuResponse? sku,

            string? storageAccountId,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Artifacts = artifacts;
            Authorizations = authorizations;
            CreateUiDefinition = createUiDefinition;
            DeploymentPolicy = deploymentPolicy;
            Description = description;
            DisplayName = displayName;
            Id = id;
            IsEnabled = isEnabled;
            Location = location;
            LockLevel = lockLevel;
            LockingPolicy = lockingPolicy;
            MainTemplate = mainTemplate;
            ManagedBy = managedBy;
            ManagementPolicy = managementPolicy;
            Name = name;
            NotificationPolicy = notificationPolicy;
            PackageFileUri = packageFileUri;
            Policies = policies;
            Sku = sku;
            StorageAccountId = storageAccountId;
            Tags = tags;
            Type = type;
        }
    }
}
