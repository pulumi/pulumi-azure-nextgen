// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.LabServices.Latest
{
    public static class GetUser
    {
        public static Task<GetUserResult> InvokeAsync(GetUserArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetUserResult>("azure-nextgen:labservices/latest:getUser", args ?? new GetUserArgs(), options.WithVersion());
    }


    public sealed class GetUserArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Specify the $expand query. Example: 'properties($select=email)'
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the lab Account.
        /// </summary>
        [Input("labAccountName", required: true)]
        public string LabAccountName { get; set; } = null!;

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public string LabName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the user.
        /// </summary>
        [Input("userName", required: true)]
        public string UserName { get; set; } = null!;

        public GetUserArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetUserResult
    {
        /// <summary>
        /// The user email address, as it was specified during registration.
        /// </summary>
        public readonly string Email;
        /// <summary>
        /// The user family name, as it was specified during registration.
        /// </summary>
        public readonly string FamilyName;
        /// <summary>
        /// The user given name, as it was specified during registration.
        /// </summary>
        public readonly string GivenName;
        /// <summary>
        /// The identifier of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The details of the latest operation. ex: status, error
        /// </summary>
        public readonly Outputs.LatestOperationResultResponse LatestOperationResult;
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
        public readonly string? ProvisioningState;
        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The user tenant ID, as it was specified during registration.
        /// </summary>
        public readonly string TenantId;
        /// <summary>
        /// How long the user has used his VMs in this lab
        /// </summary>
        public readonly string TotalUsage;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        public readonly string? UniqueIdentifier;

        [OutputConstructor]
        private GetUserResult(
            string email,

            string familyName,

            string givenName,

            string id,

            Outputs.LatestOperationResultResponse latestOperationResult,

            string? location,

            string name,

            string? provisioningState,

            ImmutableDictionary<string, string>? tags,

            string tenantId,

            string totalUsage,

            string type,

            string? uniqueIdentifier)
        {
            Email = email;
            FamilyName = familyName;
            GivenName = givenName;
            Id = id;
            LatestOperationResult = latestOperationResult;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Tags = tags;
            TenantId = tenantId;
            TotalUsage = totalUsage;
            Type = type;
            UniqueIdentifier = uniqueIdentifier;
        }
    }
}
