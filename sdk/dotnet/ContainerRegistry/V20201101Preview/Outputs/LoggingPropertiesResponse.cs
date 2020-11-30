// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20201101Preview.Outputs
{

    [OutputType]
    public sealed class LoggingPropertiesResponse
    {
        /// <summary>
        /// Indicates whether audit logs are enabled on the connected registry.
        /// </summary>
        public readonly string? AuditLogStatus;
        /// <summary>
        /// The verbosity of logs persisted on the connected registry.
        /// </summary>
        public readonly string? LogLevel;

        [OutputConstructor]
        private LoggingPropertiesResponse(
            string? auditLogStatus,

            string? logLevel)
        {
            AuditLogStatus = auditLogStatus;
            LogLevel = logLevel;
        }
    }
}
