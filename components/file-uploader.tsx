'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void
  acceptedFileTypes?: string[]
  maxFileSize?: number // in MB
}

export function FileUploader({
  onFilesSelected,
  acceptedFileTypes = ['.pdf', '.doc', '.docx', '.txt', '.csv'],
  maxFileSize = 10
}: FileUploaderProps) {
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState<string>('')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      if (file.size > maxFileSize * 1024 * 1024) {
        setError(`File ${file.name} is too large. Maximum size is ${maxFileSize}MB`)
        return false
      }
      return true
    })

    setFiles(prev => [...prev, ...validFiles])
    onFilesSelected(validFiles)
  }, [maxFileSize, onFilesSelected])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes.reduce((acc, type) => ({
      ...acc,
      [type]: []
    }), {} as Record<string, string[]>),
    maxSize: maxFileSize * 1024 * 1024,
    multiple: true,
    onDragEnter: () => {},
    onDragLeave: () => {},
    onDragOver: () => {}
  })

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev]
      newFiles.splice(index, 1)
      onFilesSelected(newFiles)
      return newFiles
    })
  }

  return (
    <div className="space-y-4 w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 sm:p-6 md:p-8 text-center cursor-pointer transition-colors duration-200
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary/50'}
          min-h-[200px] flex flex-col items-center justify-center
        `}
      >
        <input {...(getInputProps() as any)} />
        <Icons.upload className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-400" />
        <p className="mt-2 text-sm sm:text-base">
          Drag & drop files here, or click to select files
        </p>
        <div className="mt-2 flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm text-gray-500">
          <p>Supported formats: {acceptedFileTypes.join(', ')}</p>
          <span className="hidden sm:inline">•</span>
          <p>Maximum size: {maxFileSize}MB</p>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-xs sm:text-sm">{error}</p>
      )}

      {files.length > 0 && (
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {files.map((file, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-2 min-w-0">
                <Icons.file className="h-4 w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm truncate">{file.name}</span>
                <span className="text-xs text-gray-500 hidden sm:inline">
                  ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="ml-2 flex-shrink-0"
              >
                <Icons.trash className="h-4 w-4" />
                <span className="sr-only">Remove file</span>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 