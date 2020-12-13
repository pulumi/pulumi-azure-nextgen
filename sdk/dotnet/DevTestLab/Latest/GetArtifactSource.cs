// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevTestLab.Latest
{
    public static class GetArtifactSource
    {
        public static Task<GetArtifactSourceResult> InvokeAsync(GetArtifactSourceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetArtifactSourceResult>("azure-nextgen:devtestlab/latest:getArtifactSource", args ?? new GetArtifactSourceArgs(), options.WithVersion());
    }


    public sealed class GetArtifactSourceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Specify the $expand query. Example: 'properties($select=displayName)'
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public string LabName { get; set; } = null!;

        /// <summary>
        /// The name of the artifact source.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetArtifactSourceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetArtifactSourceResult
    {
        /// <summary>
        /// The folder containing Azure Resource Manager templates.
        /// </summary>
        public readonly string? ArmTemplateFolderPath;
        /// <summary>
        /// The artifact source's branch reference.
        /// </summary>
        public readonly string? BranchRef;
        /// <summary>
        /// The artifact source's creation date.
        /// </summary>
        public readonly string CreatedDate;
        /// <summary>
        /// The artifact source's display name.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// The folder containing artifacts.
        /// </summary>
        public readonly string? FolderPath;
        /// <summary>
        /// The identifier of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The location of the resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The security token to authenticate to the artifact source.
        /// </summary>
        public readonly string? SecurityToken;
        /// <summary>
        /// The artifact source's type.
        /// </summary>
        public readonly string? SourceType;
        /// <summary>
        /// Indicates if the artifact source is enabled (values: Enabled, Disabled).
        /// </summary>
        public readonly string? Status;
        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        public readonly string UniqueIdentifier;
        /// <summary>
        /// The artifact source's URI.
        /// </summary>
        public readonly string? Uri;

        [OutputConstructor]
        private GetArtifactSourceResult(
            string? armTemplateFolderPath,

            string? branchRef,

            string createdDate,

            string? displayName,

            string? folderPath,

            string id,

            string? location,

            string name,

            string provisioningState,

            string? securityToken,

            string? sourceType,

            string? status,

            ImmutableDictionary<string, string>? tags,

            string type,

            string uniqueIdentifier,

            string? uri)
        {
            ArmTemplateFolderPath = armTemplateFolderPath;
            BranchRef = branchRef;
            CreatedDate = createdDate;
            DisplayName = displayName;
            FolderPath = folderPath;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            SecurityToken = securityToken;
            SourceType = sourceType;
            Status = status;
            Tags = tags;
            Type = type;
            UniqueIdentifier = uniqueIdentifier;
            Uri = uri;
        }
    }
}
