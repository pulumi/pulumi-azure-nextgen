// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.Latest.Outputs
{

    [OutputType]
    public sealed class ConnectToSourceSqlServerTaskOutputLoginLevelResponse
    {
        /// <summary>
        /// The default database for the login.
        /// </summary>
        public readonly string DefaultDatabase;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The state of the login.
        /// </summary>
        public readonly bool IsEnabled;
        /// <summary>
        /// The type of login.
        /// </summary>
        public readonly string LoginType;
        /// <summary>
        /// Information about eligibility of login for migration.
        /// </summary>
        public readonly Outputs.MigrationEligibilityInfoResponse MigrationEligibility;
        /// <summary>
        /// Login name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Type of result - database level or task level
        /// Expected value is 'LoginLevelOutput'.
        /// </summary>
        public readonly string ResultType;

        [OutputConstructor]
        private ConnectToSourceSqlServerTaskOutputLoginLevelResponse(
            string defaultDatabase,

            string id,

            bool isEnabled,

            string loginType,

            Outputs.MigrationEligibilityInfoResponse migrationEligibility,

            string name,

            string resultType)
        {
            DefaultDatabase = defaultDatabase;
            Id = id;
            IsEnabled = isEnabled;
            LoginType = loginType;
            MigrationEligibility = migrationEligibility;
            Name = name;
            ResultType = resultType;
        }
    }
}
