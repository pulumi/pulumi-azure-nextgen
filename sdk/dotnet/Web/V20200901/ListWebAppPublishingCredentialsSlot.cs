// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200901
{
    public static class ListWebAppPublishingCredentialsSlot
    {
        public static Task<ListWebAppPublishingCredentialsSlotResult> InvokeAsync(ListWebAppPublishingCredentialsSlotArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListWebAppPublishingCredentialsSlotResult>("azure-nextgen:web/v20200901:listWebAppPublishingCredentialsSlot", args ?? new ListWebAppPublishingCredentialsSlotArgs(), options.WithVersion());
    }


    public sealed class ListWebAppPublishingCredentialsSlotArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the deployment slot. If a slot is not specified, the API will get the publishing credentials for the production slot.
        /// </summary>
        [Input("slot", required: true)]
        public string Slot { get; set; } = null!;

        public ListWebAppPublishingCredentialsSlotArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListWebAppPublishingCredentialsSlotResult
    {
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Password used for publishing.
        /// </summary>
        public readonly string? PublishingPassword;
        /// <summary>
        /// Password hash used for publishing.
        /// </summary>
        public readonly string? PublishingPasswordHash;
        /// <summary>
        /// Password hash salt used for publishing.
        /// </summary>
        public readonly string? PublishingPasswordHashSalt;
        /// <summary>
        /// Username used for publishing.
        /// </summary>
        public readonly string PublishingUserName;
        /// <summary>
        /// Url of SCM site.
        /// </summary>
        public readonly string? ScmUri;
        /// <summary>
        /// The system metadata relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListWebAppPublishingCredentialsSlotResult(
            string id,

            string? kind,

            string name,

            string? publishingPassword,

            string? publishingPasswordHash,

            string? publishingPasswordHashSalt,

            string publishingUserName,

            string? scmUri,

            Outputs.SystemDataResponse systemData,

            string type)
        {
            Id = id;
            Kind = kind;
            Name = name;
            PublishingPassword = publishingPassword;
            PublishingPasswordHash = publishingPasswordHash;
            PublishingPasswordHashSalt = publishingPasswordHashSalt;
            PublishingUserName = publishingUserName;
            ScmUri = scmUri;
            SystemData = systemData;
            Type = type;
        }
    }
}
