// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180419.Outputs
{

    [OutputType]
    public sealed class MigrateSqlServerSqlMISyncTaskOutputErrorResponse
    {
        /// <summary>
        /// Migration error
        /// </summary>
        public readonly Outputs.ReportableExceptionResponse Error;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Result type
        /// Expected value is 'ErrorOutput'.
        /// </summary>
        public readonly string ResultType;

        [OutputConstructor]
        private MigrateSqlServerSqlMISyncTaskOutputErrorResponse(
            Outputs.ReportableExceptionResponse error,

            string id,

            string resultType)
        {
            Error = error;
            Id = id;
            ResultType = resultType;
        }
    }
}
