// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.Latest
{
    public static class GetIntegrationAccountAgreement
    {
        public static Task<GetIntegrationAccountAgreementResult> InvokeAsync(GetIntegrationAccountAgreementArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetIntegrationAccountAgreementResult>("azure-nextgen:logic/latest:getIntegrationAccountAgreement", args ?? new GetIntegrationAccountAgreementArgs(), options.WithVersion());
    }


    public sealed class GetIntegrationAccountAgreementArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The integration account agreement name.
        /// </summary>
        [Input("agreementName", required: true)]
        public string AgreementName { get; set; } = null!;

        /// <summary>
        /// The integration account name.
        /// </summary>
        [Input("integrationAccountName", required: true)]
        public string IntegrationAccountName { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetIntegrationAccountAgreementArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetIntegrationAccountAgreementResult
    {
        /// <summary>
        /// The agreement type.
        /// </summary>
        public readonly string AgreementType;
        /// <summary>
        /// The changed time.
        /// </summary>
        public readonly string ChangedTime;
        /// <summary>
        /// The agreement content.
        /// </summary>
        public readonly Outputs.AgreementContentResponse Content;
        /// <summary>
        /// The created time.
        /// </summary>
        public readonly string CreatedTime;
        /// <summary>
        /// The business identity of the guest partner.
        /// </summary>
        public readonly Outputs.BusinessIdentityResponse GuestIdentity;
        /// <summary>
        /// The integration account partner that is set as guest partner for this agreement.
        /// </summary>
        public readonly string GuestPartner;
        /// <summary>
        /// The business identity of the host partner.
        /// </summary>
        public readonly Outputs.BusinessIdentityResponse HostIdentity;
        /// <summary>
        /// The integration account partner that is set as host partner for this agreement.
        /// </summary>
        public readonly string HostPartner;
        /// <summary>
        /// The resource id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The metadata.
        /// </summary>
        public readonly object? Metadata;
        /// <summary>
        /// Gets the resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Gets the resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetIntegrationAccountAgreementResult(
            string agreementType,

            string changedTime,

            Outputs.AgreementContentResponse content,

            string createdTime,

            Outputs.BusinessIdentityResponse guestIdentity,

            string guestPartner,

            Outputs.BusinessIdentityResponse hostIdentity,

            string hostPartner,

            string id,

            string? location,

            object? metadata,

            string name,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            AgreementType = agreementType;
            ChangedTime = changedTime;
            Content = content;
            CreatedTime = createdTime;
            GuestIdentity = guestIdentity;
            GuestPartner = guestPartner;
            HostIdentity = hostIdentity;
            HostPartner = hostPartner;
            Id = id;
            Location = location;
            Metadata = metadata;
            Name = name;
            Tags = tags;
            Type = type;
        }
    }
}
