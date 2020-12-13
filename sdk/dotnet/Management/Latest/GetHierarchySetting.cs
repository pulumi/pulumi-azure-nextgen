// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Management.Latest
{
    public static class GetHierarchySetting
    {
        public static Task<GetHierarchySettingResult> InvokeAsync(GetHierarchySettingArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetHierarchySettingResult>("azure-nextgen:management/latest:getHierarchySetting", args ?? new GetHierarchySettingArgs(), options.WithVersion());
    }


    public sealed class GetHierarchySettingArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Management Group ID.
        /// </summary>
        [Input("groupId", required: true)]
        public string GroupId { get; set; } = null!;

        public GetHierarchySettingArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetHierarchySettingResult
    {
        /// <summary>
        /// Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
        /// </summary>
        public readonly string? DefaultManagementGroup;
        /// <summary>
        /// The fully qualified ID for the settings object.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000/settings/default.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the object. In this case, default.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
        /// </summary>
        public readonly bool? RequireAuthorizationForGroupCreation;
        /// <summary>
        /// The AAD Tenant ID associated with the hierarchy settings. For example, 00000000-0000-0000-0000-000000000000
        /// </summary>
        public readonly string? TenantId;
        /// <summary>
        /// The type of the resource.  For example, Microsoft.Management/managementGroups/settings.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetHierarchySettingResult(
            string? defaultManagementGroup,

            string id,

            string name,

            bool? requireAuthorizationForGroupCreation,

            string? tenantId,

            string type)
        {
            DefaultManagementGroup = defaultManagementGroup;
            Id = id;
            Name = name;
            RequireAuthorizationForGroupCreation = requireAuthorizationForGroupCreation;
            TenantId = tenantId;
            Type = type;
        }
    }
}
