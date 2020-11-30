// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.Latest
{
    public static class GetNotificationRegistration
    {
        public static Task<GetNotificationRegistrationResult> InvokeAsync(GetNotificationRegistrationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNotificationRegistrationResult>("azure-nextgen:providerhub/latest:getNotificationRegistration", args ?? new GetNotificationRegistrationArgs(), options.WithVersion());
    }


    public sealed class GetNotificationRegistrationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The notification registration.
        /// </summary>
        [Input("notificationRegistrationName", required: true)]
        public string NotificationRegistrationName { get; set; } = null!;

        /// <summary>
        /// The name of the resource provider hosted within ProviderHub.
        /// </summary>
        [Input("providerNamespace", required: true)]
        public string ProviderNamespace { get; set; } = null!;

        public GetNotificationRegistrationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetNotificationRegistrationResult
    {
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        public readonly Outputs.NotificationRegistrationResponseProperties Properties;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetNotificationRegistrationResult(
            string name,

            Outputs.NotificationRegistrationResponseProperties properties,

            string type)
        {
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}
