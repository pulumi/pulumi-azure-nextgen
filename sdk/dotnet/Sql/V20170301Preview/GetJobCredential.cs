// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20170301Preview
{
    public static class GetJobCredential
    {
        public static Task<GetJobCredentialResult> InvokeAsync(GetJobCredentialArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetJobCredentialResult>("azure-nextgen:sql/v20170301preview:getJobCredential", args ?? new GetJobCredentialArgs(), options.WithVersion());
    }


    public sealed class GetJobCredentialArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the credential.
        /// </summary>
        [Input("credentialName", required: true)]
        public string CredentialName { get; set; } = null!;

        /// <summary>
        /// The name of the job agent.
        /// </summary>
        [Input("jobAgentName", required: true)]
        public string JobAgentName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        public GetJobCredentialArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetJobCredentialResult
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The credential password.
        /// </summary>
        public readonly string Password;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The credential user name.
        /// </summary>
        public readonly string Username;

        [OutputConstructor]
        private GetJobCredentialResult(
            string id,

            string name,

            string password,

            string type,

            string username)
        {
            Id = id;
            Name = name;
            Password = password;
            Type = type;
            Username = username;
        }
    }
}
