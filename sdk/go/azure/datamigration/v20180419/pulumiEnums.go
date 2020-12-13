// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180419

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Authentication type to use for connection
type AuthenticationType pulumi.String

const (
	AuthenticationTypeNone                      = AuthenticationType("None")
	AuthenticationTypeWindowsAuthentication     = AuthenticationType("WindowsAuthentication")
	AuthenticationTypeSqlAuthentication         = AuthenticationType("SqlAuthentication")
	AuthenticationTypeActiveDirectoryIntegrated = AuthenticationType("ActiveDirectoryIntegrated")
	AuthenticationTypeActiveDirectoryPassword   = AuthenticationType("ActiveDirectoryPassword")
)

func (AuthenticationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AuthenticationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AuthenticationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AuthenticationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AuthenticationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Backup Mode to specify whether to use existing backup or create new backup.
type BackupMode pulumi.String

const (
	BackupModeCreateBackup   = BackupMode("CreateBackup")
	BackupModeExistingBackup = BackupMode("ExistingBackup")
)

func (BackupMode) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e BackupMode) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e BackupMode) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e BackupMode) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e BackupMode) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Source platform for the project
type ProjectSourcePlatform pulumi.String

const (
	ProjectSourcePlatformSQL     = ProjectSourcePlatform("SQL")
	ProjectSourcePlatformUnknown = ProjectSourcePlatform("Unknown")
)

func (ProjectSourcePlatform) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ProjectSourcePlatform) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProjectSourcePlatform) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProjectSourcePlatform) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ProjectSourcePlatform) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Target platform for the project
type ProjectTargetPlatform pulumi.String

const (
	ProjectTargetPlatformSQLDB   = ProjectTargetPlatform("SQLDB")
	ProjectTargetPlatformUnknown = ProjectTargetPlatform("Unknown")
)

func (ProjectTargetPlatform) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ProjectTargetPlatform) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProjectTargetPlatform) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProjectTargetPlatform) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ProjectTargetPlatform) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Permission group for validations
type ServerLevelPermissionsGroup pulumi.String

const (
	ServerLevelPermissionsGroupDefault                             = ServerLevelPermissionsGroup("Default")
	ServerLevelPermissionsGroupMigrationFromSqlServerToAzureDB     = ServerLevelPermissionsGroup("MigrationFromSqlServerToAzureDB")
	ServerLevelPermissionsGroupMigrationFromSqlServerToAzureMI     = ServerLevelPermissionsGroup("MigrationFromSqlServerToAzureMI")
	ServerLevelPermissionsGroupMigrationFromMySQLToAzureDBForMySQL = ServerLevelPermissionsGroup("MigrationFromMySQLToAzureDBForMySQL")
)

func (ServerLevelPermissionsGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ServerLevelPermissionsGroup) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ServerLevelPermissionsGroup) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ServerLevelPermissionsGroup) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ServerLevelPermissionsGroup) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Server platform type for connection
type SqlSourcePlatform pulumi.String

const (
	SqlSourcePlatformSqlOnPrem = SqlSourcePlatform("SqlOnPrem")
)

func (SqlSourcePlatform) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SqlSourcePlatform) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SqlSourcePlatform) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SqlSourcePlatform) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SqlSourcePlatform) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
