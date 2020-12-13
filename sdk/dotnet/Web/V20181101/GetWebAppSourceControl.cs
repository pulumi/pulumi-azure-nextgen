// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20181101
{
    public static class GetWebAppSourceControl
    {
        public static Task<GetWebAppSourceControlResult> InvokeAsync(GetWebAppSourceControlArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppSourceControlResult>("azure-nextgen:web/v20181101:getWebAppSourceControl", args ?? new GetWebAppSourceControlArgs(), options.WithVersion());
    }


    public sealed class GetWebAppSourceControlArgs : Pulumi.InvokeArgs
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

        public GetWebAppSourceControlArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppSourceControlResult
    {
        /// <summary>
        /// Name of branch to use for deployment.
        /// </summary>
        public readonly string? Branch;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; to enable deployment rollback; otherwise, &lt;code&gt;false&lt;/code&gt;.
        /// </summary>
        public readonly bool? DeploymentRollbackEnabled;
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; to limit to manual integration; &lt;code&gt;false&lt;/code&gt; to enable continuous integration (which configures webhooks into online repos like GitHub).
        /// </summary>
        public readonly bool? IsManualIntegration;
        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; for a Mercurial repository; &lt;code&gt;false&lt;/code&gt; for a Git repository.
        /// </summary>
        public readonly bool? IsMercurial;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Repository or source control URL.
        /// </summary>
        public readonly string? RepoUrl;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetWebAppSourceControlResult(
            string? branch,

            bool? deploymentRollbackEnabled,

            string id,

            bool? isManualIntegration,

            bool? isMercurial,

            string? kind,

            string name,

            string? repoUrl,

            string type)
        {
            Branch = branch;
            DeploymentRollbackEnabled = deploymentRollbackEnabled;
            Id = id;
            IsManualIntegration = isManualIntegration;
            IsMercurial = isMercurial;
            Kind = kind;
            Name = name;
            RepoUrl = repoUrl;
            Type = type;
        }
    }
}
