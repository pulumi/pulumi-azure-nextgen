// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Relay.Latest
{
    public static class GetHybridConnection
    {
        public static Task<GetHybridConnectionResult> InvokeAsync(GetHybridConnectionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetHybridConnectionResult>("azure-nextgen:relay/latest:getHybridConnection", args ?? new GetHybridConnectionArgs(), options.WithVersion());
    }


    public sealed class GetHybridConnectionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The hybrid connection name.
        /// </summary>
        [Input("hybridConnectionName", required: true)]
        public string HybridConnectionName { get; set; } = null!;

        /// <summary>
        /// The namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetHybridConnectionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetHybridConnectionResult
    {
        /// <summary>
        /// The time the hybrid connection was created.
        /// </summary>
        public readonly string CreatedAt;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The number of listeners for this hybrid connection. Note that min : 1 and max:25 are supported.
        /// </summary>
        public readonly int ListenerCount;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Returns true if client authorization is needed for this hybrid connection; otherwise, false.
        /// </summary>
        public readonly bool? RequiresClientAuthorization;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The time the namespace was updated.
        /// </summary>
        public readonly string UpdatedAt;
        /// <summary>
        /// The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.
        /// </summary>
        public readonly string? UserMetadata;

        [OutputConstructor]
        private GetHybridConnectionResult(
            string createdAt,

            string id,

            int listenerCount,

            string name,

            bool? requiresClientAuthorization,

            string type,

            string updatedAt,

            string? userMetadata)
        {
            CreatedAt = createdAt;
            Id = id;
            ListenerCount = listenerCount;
            Name = name;
            RequiresClientAuthorization = requiresClientAuthorization;
            Type = type;
            UpdatedAt = updatedAt;
            UserMetadata = userMetadata;
        }
    }
}
