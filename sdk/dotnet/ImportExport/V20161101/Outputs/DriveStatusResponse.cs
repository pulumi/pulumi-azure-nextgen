// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ImportExport.V20161101.Outputs
{

    [OutputType]
    public sealed class DriveStatusResponse
    {
        /// <summary>
        /// The BitLocker key used to encrypt the drive.
        /// </summary>
        public readonly string? BitLockerKey;
        /// <summary>
        /// Bytes successfully transferred for the drive.
        /// </summary>
        public readonly double? BytesSucceeded;
        /// <summary>
        /// Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state.
        /// </summary>
        public readonly string? CopyStatus;
        /// <summary>
        /// The drive header hash value.
        /// </summary>
        public readonly string? DriveHeaderHash;
        /// <summary>
        /// The drive's hardware serial number, without spaces.
        /// </summary>
        public readonly string? DriveId;
        /// <summary>
        /// A URI that points to the blob containing the error log for the data transfer operation.
        /// </summary>
        public readonly string? ErrorLogUri;
        /// <summary>
        /// The relative path of the manifest file on the drive. 
        /// </summary>
        public readonly string? ManifestFile;
        /// <summary>
        /// The Base16-encoded MD5 hash of the manifest file on the drive.
        /// </summary>
        public readonly string? ManifestHash;
        /// <summary>
        /// A URI that points to the blob containing the drive manifest file. 
        /// </summary>
        public readonly string? ManifestUri;
        /// <summary>
        /// Percentage completed for the drive. 
        /// </summary>
        public readonly double? PercentComplete;
        /// <summary>
        /// The drive's current state. 
        /// </summary>
        public readonly string? State;
        /// <summary>
        /// A URI that points to the blob containing the verbose log for the data transfer operation. 
        /// </summary>
        public readonly string? VerboseLogUri;

        [OutputConstructor]
        private DriveStatusResponse(
            string? bitLockerKey,

            double? bytesSucceeded,

            string? copyStatus,

            string? driveHeaderHash,

            string? driveId,

            string? errorLogUri,

            string? manifestFile,

            string? manifestHash,

            string? manifestUri,

            double? percentComplete,

            string? state,

            string? verboseLogUri)
        {
            BitLockerKey = bitLockerKey;
            BytesSucceeded = bytesSucceeded;
            CopyStatus = copyStatus;
            DriveHeaderHash = driveHeaderHash;
            DriveId = driveId;
            ErrorLogUri = errorLogUri;
            ManifestFile = manifestFile;
            ManifestHash = manifestHash;
            ManifestUri = manifestUri;
            PercentComplete = percentComplete;
            State = state;
            VerboseLogUri = verboseLogUri;
        }
    }
}
