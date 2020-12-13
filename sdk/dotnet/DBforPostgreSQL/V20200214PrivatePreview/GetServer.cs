// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DBforPostgreSQL.V20200214PrivatePreview
{
    public static class GetServer
    {
        public static Task<GetServerResult> InvokeAsync(GetServerArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetServerResult>("azure-nextgen:dbforpostgresql/v20200214privatepreview:getServer", args ?? new GetServerArgs(), options.WithVersion());
    }


    public sealed class GetServerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        public GetServerArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetServerResult
    {
        /// <summary>
        /// The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
        /// </summary>
        public readonly string? AdministratorLogin;
        /// <summary>
        /// The administrator login password (required for server creation).
        /// </summary>
        public readonly string? AdministratorLoginPassword;
        /// <summary>
        /// availability Zone information of the server.
        /// </summary>
        public readonly string? AvailabilityZone;
        /// <summary>
        /// Status showing whether the data encryption is enabled with customer-managed keys.
        /// </summary>
        public readonly string ByokEnforcement;
        /// <summary>
        /// The mode to create a new PostgreSQL server.
        /// </summary>
        public readonly string? CreateMode;
        public readonly Outputs.ServerPropertiesResponseDelegatedSubnetArguments? DelegatedSubnetArguments;
        /// <summary>
        /// The display name of a server.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// The fully qualified domain name of a server.
        /// </summary>
        public readonly string FullyQualifiedDomainName;
        /// <summary>
        /// stand by count value can be either enabled or disabled
        /// </summary>
        public readonly string? HaEnabled;
        /// <summary>
        /// A state of a HA server that is visible to user.
        /// </summary>
        public readonly string HaState;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The Azure Active Directory identity of the server.
        /// </summary>
        public readonly Outputs.IdentityResponse? Identity;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Maintenance window of a server.
        /// </summary>
        public readonly Outputs.MaintenanceWindowResponse? MaintenanceWindow;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Restore point creation time (ISO8601 format), specifying the time to restore from.
        /// </summary>
        public readonly string? PointInTimeUTC;
        /// <summary>
        /// public network access is enabled or not
        /// </summary>
        public readonly string PublicNetworkAccess;
        /// <summary>
        /// The SKU (pricing tier) of the server.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// The source PostgreSQL server name to restore from.
        /// </summary>
        public readonly string? SourceServerName;
        /// <summary>
        /// availability Zone information of the server.
        /// </summary>
        public readonly string StandbyAvailabilityZone;
        /// <summary>
        /// A state of a server that is visible to user.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// Storage profile of a server.
        /// </summary>
        public readonly Outputs.StorageProfileResponse? StorageProfile;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// PostgreSQL Server version.
        /// </summary>
        public readonly string? Version;

        [OutputConstructor]
        private GetServerResult(
            string? administratorLogin,

            string? administratorLoginPassword,

            string? availabilityZone,

            string byokEnforcement,

            string? createMode,

            Outputs.ServerPropertiesResponseDelegatedSubnetArguments? delegatedSubnetArguments,

            string? displayName,

            string fullyQualifiedDomainName,

            string? haEnabled,

            string haState,

            string id,

            Outputs.IdentityResponse? identity,

            string location,

            Outputs.MaintenanceWindowResponse? maintenanceWindow,

            string name,

            string? pointInTimeUTC,

            string publicNetworkAccess,

            Outputs.SkuResponse? sku,

            string? sourceServerName,

            string standbyAvailabilityZone,

            string state,

            Outputs.StorageProfileResponse? storageProfile,

            ImmutableDictionary<string, string>? tags,

            string type,

            string? version)
        {
            AdministratorLogin = administratorLogin;
            AdministratorLoginPassword = administratorLoginPassword;
            AvailabilityZone = availabilityZone;
            ByokEnforcement = byokEnforcement;
            CreateMode = createMode;
            DelegatedSubnetArguments = delegatedSubnetArguments;
            DisplayName = displayName;
            FullyQualifiedDomainName = fullyQualifiedDomainName;
            HaEnabled = haEnabled;
            HaState = haState;
            Id = id;
            Identity = identity;
            Location = location;
            MaintenanceWindow = maintenanceWindow;
            Name = name;
            PointInTimeUTC = pointInTimeUTC;
            PublicNetworkAccess = publicNetworkAccess;
            Sku = sku;
            SourceServerName = sourceServerName;
            StandbyAvailabilityZone = standbyAvailabilityZone;
            State = state;
            StorageProfile = storageProfile;
            Tags = tags;
            Type = type;
            Version = version;
        }
    }
}
