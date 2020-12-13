// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.NotificationHubs.V20140901
{
    public static class GetNotificationHub
    {
        public static Task<GetNotificationHubResult> InvokeAsync(GetNotificationHubArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNotificationHubResult>("azure-nextgen:notificationhubs/v20140901:getNotificationHub", args ?? new GetNotificationHubArgs(), options.WithVersion());
    }


    public sealed class GetNotificationHubArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The namespace name.
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// The notification hub name.
        /// </summary>
        [Input("notificationHubName", required: true)]
        public string NotificationHubName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetNotificationHubArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetNotificationHubResult
    {
        /// <summary>
        /// Gets or sets the id of the created NotificationHub.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Gets or sets datacenter location of the NotificationHub.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Gets or sets name of the NotificationHub.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Gets or sets properties of the NotificationHub.
        /// </summary>
        public readonly Outputs.NotificationHubPropertiesResponse Properties;
        /// <summary>
        /// Gets or sets tags of the NotificationHub.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Gets or sets resource type of the NotificationHub.
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private GetNotificationHubResult(
            string? id,

            string? location,

            string? name,

            Outputs.NotificationHubPropertiesResponse properties,

            ImmutableDictionary<string, string>? tags,

            string? type)
        {
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Tags = tags;
            Type = type;
        }
    }
}
