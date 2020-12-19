// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StreamAnalytics.Latest.Inputs
{

    /// <summary>
    /// Describes an Azure Data Lake Store output data source.
    /// </summary>
    public sealed class AzureDataLakeStoreOutputDataSourceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("accountName")]
        public Input<string>? AccountName { get; set; }

        /// <summary>
        /// The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead.
        /// </summary>
        [Input("dateFormat")]
        public Input<string>? DateFormat { get; set; }

        /// <summary>
        /// The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("filePathPrefix")]
        public Input<string>? FilePathPrefix { get; set; }

        /// <summary>
        /// A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("refreshToken")]
        public Input<string>? RefreshToken { get; set; }

        /// <summary>
        /// The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("tenantId")]
        public Input<string>? TenantId { get; set; }

        /// <summary>
        /// The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead.
        /// </summary>
        [Input("timeFormat")]
        public Input<string>? TimeFormat { get; set; }

        /// <summary>
        /// The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
        /// </summary>
        [Input("tokenUserDisplayName")]
        public Input<string>? TokenUserDisplayName { get; set; }

        /// <summary>
        /// The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
        /// </summary>
        [Input("tokenUserPrincipalName")]
        public Input<string>? TokenUserPrincipalName { get; set; }

        /// <summary>
        /// Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
        /// Expected value is 'Microsoft.DataLake/Accounts'.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public AzureDataLakeStoreOutputDataSourceArgs()
        {
        }
    }
}
