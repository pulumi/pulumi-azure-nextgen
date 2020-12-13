// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20170801Preview
{
    public static class GetWorkspaceSetting
    {
        public static Task<GetWorkspaceSettingResult> InvokeAsync(GetWorkspaceSettingArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWorkspaceSettingResult>("azure-nextgen:security/v20170801preview:getWorkspaceSetting", args ?? new GetWorkspaceSettingArgs(), options.WithVersion());
    }


    public sealed class GetWorkspaceSettingArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the security setting
        /// </summary>
        [Input("workspaceSettingName", required: true)]
        public string WorkspaceSettingName { get; set; } = null!;

        public GetWorkspaceSettingArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWorkspaceSettingResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
        /// </summary>
        public readonly string Scope;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The full Azure ID of the workspace to save the data in
        /// </summary>
        public readonly string WorkspaceId;

        [OutputConstructor]
        private GetWorkspaceSettingResult(
            string id,

            string name,

            string scope,

            string type,

            string workspaceId)
        {
            Id = id;
            Name = name;
            Scope = scope;
            Type = type;
            WorkspaceId = workspaceId;
        }
    }
}
