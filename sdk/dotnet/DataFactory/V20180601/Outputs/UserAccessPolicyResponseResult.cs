// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Outputs
{

    [OutputType]
    public sealed class UserAccessPolicyResponseResult
    {
        /// <summary>
        /// The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource.
        /// </summary>
        public readonly string? AccessResourcePath;
        /// <summary>
        /// Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours.
        /// </summary>
        public readonly string? ExpireTime;
        /// <summary>
        /// The string with permissions for Data Plane access. Currently only 'r' is supported which grants read only access.
        /// </summary>
        public readonly string? Permissions;
        /// <summary>
        /// The name of the profile. Currently only the default is supported. The default value is DefaultProfile.
        /// </summary>
        public readonly string? ProfileName;
        /// <summary>
        /// Start time for the token. If not specified the current time will be used.
        /// </summary>
        public readonly string? StartTime;

        [OutputConstructor]
        private UserAccessPolicyResponseResult(
            string? accessResourcePath,

            string? expireTime,

            string? permissions,

            string? profileName,

            string? startTime)
        {
            AccessResourcePath = accessResourcePath;
            ExpireTime = expireTime;
            Permissions = permissions;
            ProfileName = profileName;
            StartTime = startTime;
        }
    }
}